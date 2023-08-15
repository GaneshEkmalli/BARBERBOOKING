import jwtDecode, { JwtPayload } from "jwt-decode";

export const isValidToken = (accessToken: string | null): boolean => {
    if (!accessToken) {
        return false;
    }
    const decodedToken: JwtPayload = jwtDecode(accessToken);
    const currentTime: number = Date.now() / 1000;
    return decodedToken.exp !== undefined && decodedToken.exp > currentTime;
}
