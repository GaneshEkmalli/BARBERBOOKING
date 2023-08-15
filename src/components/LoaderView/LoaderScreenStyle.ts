import { StyleSheet } from 'react-native';
import { DARKGRAY } from '../../shared/constants/color';
import { FONT_TWELVE } from '../../shared/constants/FontConstant';

export const LoaderScreenStyle = StyleSheet.create({
    loaderText: {
        color: DARKGRAY,
        fontSize: FONT_TWELVE,
        lineHeight: 13,
        marginTop: 10
    },
    loaderView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})