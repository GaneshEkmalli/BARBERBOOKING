import { StyleSheet } from 'react-native';
import { ARCHIVO_BLACKBOLD, ARCHIVO_BOLD, ARCHIVO_MEDIUN, LIGHTBLUE, WHITE } from '../constants/color';

export const textCommonStyle = StyleSheet.create({
    customFontText: {
        fontSize: 14,
        lineHeight: 16,
        color: WHITE,
        fontFamily: ARCHIVO_BOLD,
    },
    textArchioBold: {
        fontSize: 14,
        lineHeight: 16,
        color: WHITE,
        fontFamily: ARCHIVO_BOLD,
    },
    textPoppinsExtraBold: {
        fontSize: 11,
        lineHeight: 16,
        color: LIGHTBLUE,
        fontFamily: ARCHIVO_BLACKBOLD,
    },
    textPoppinsMediumBold: {
        fontSize: 11,
        lineHeight: 16,
        color: LIGHTBLUE,
        fontFamily: ARCHIVO_MEDIUN,
    },

});