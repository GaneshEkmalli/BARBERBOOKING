import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ENVIRONMENT } from '../shared/constants/environment';
import { isValidToken } from '../shared/constants/auth-utilities';

interface RefreshTokenData {
    isExecuting: boolean;
    promise: Promise<AxiosResponse> | null;
}
declare module 'axios' {
    export interface HeadersDefaults {
        Authorization?: string;
    }
}
export let refreshTokenData: RefreshTokenData = {
    isExecuting: false,
    promise: null,
};

export const updateRefreshTokenData = (isExecuting: boolean, promise: Promise<AxiosResponse> | null): void => {
    refreshTokenData = {
        isExecuting,
        promise,
    };
};

const authAxiosInstance = axios.create();
const refreshSession = async (accessToken: string): Promise<void> => {
    await setSession(accessToken);
};

export const setSession = async (accessToken: string, refreshToken?: string): Promise<void> => {
    if (accessToken) {
        await AsyncStorage.setItem('accessToken', accessToken);
        if (refreshToken) {
            await AsyncStorage.setItem('refreshToken', refreshToken);
        }
        authAxiosInstance.defaults.headers.Authorization = `Bearer ${accessToken}`;
    } else {
        await AsyncStorage.removeItem('accessToken');
        await AsyncStorage.removeItem('refreshToken');
        delete authAxiosInstance.defaults.headers.Authorization;
    }
};

authAxiosInstance.interceptors.request.use(
    async (conf: InternalAxiosRequestConfig) => {
        const accessToken = await AsyncStorage.getItem('accessToken');
        if (!accessToken || !isValidToken(accessToken)) {
            const refreshToken = await AsyncStorage.getItem('refreshToken');
            if (!refreshToken || !isValidToken(refreshToken)) {
                updateRefreshTokenData(false, null);
                return Promise.reject(new Error('Unauthorized User'));
            } else {
                try {
                    let refreshTokenPromise: Promise<AxiosResponse>;
                    if (refreshTokenData?.isExecuting && refreshTokenData?.promise) {
                        refreshTokenPromise = refreshTokenData.promise;
                    } else {
                        refreshTokenPromise = axios.create().post(`${ENVIRONMENT.AUTH_API_URL}auth/token/refresh`, { refreshToken: refreshToken });
                        updateRefreshTokenData(true, refreshTokenPromise);
                    }
                    const response = await refreshTokenPromise;
                    updateRefreshTokenData(false, null);
                    if (response?.data?.data?.accessToken && conf.headers) {
                        const { accessToken } = response.data.data;
                        refreshSession(accessToken);
                        conf.headers.Authorization = `Bearer ${accessToken}`;
                    } else {
                        updateRefreshTokenData(false, null);
                        return Promise.reject(new Error('Unauthorized User'));
                    }
                } catch (error) {
                    updateRefreshTokenData(false, null);
                    return Promise.reject(error);
                }
            }
        } else {
            if (accessToken && conf.headers) {
                conf.headers.Authorization = `Bearer ${accessToken}`;

            }
        }
        return conf;
    },
    (error: any) => {
        updateRefreshTokenData(false, null);
        return Promise.reject(error);
    }
);

export default authAxiosInstance;
