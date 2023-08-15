import { PermissionsAndroid } from 'react-native';

const Permission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED
    } catch (err) {
        console.warn(err);
    }
};
export const requestStoragePermission = async () => {
    const response = await Permission()
    return response
}