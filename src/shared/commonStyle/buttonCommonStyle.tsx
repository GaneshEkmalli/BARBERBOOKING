import { StyleSheet } from 'react-native';
import { PANTONE, VERYDARK_GRAYISHRED } from '../constants/color';

export const buttonCommonStyle = StyleSheet.create({
    buttonStyle: {
        borderRadius: 5,
        backgroundColor: PANTONE,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        height: 40,
        marginVertical: 20,
        marginHorizontal: 20,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '700',
        color: VERYDARK_GRAYISHRED,
        textAlign: 'center',
        lineHeight: 30
    },

});