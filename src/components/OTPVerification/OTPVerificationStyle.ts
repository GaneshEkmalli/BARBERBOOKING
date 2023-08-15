import { StyleSheet } from 'react-native'
import { BGRED, BLACK, BROWN, BLUE_ALICE, LIGHTBLACK, PANTONE, VERYDARK_GRAYISHRED, WHITE } from '../../shared/constants/color'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { FONT_EIGHTEEN, FONT_SIXTENN, FONT_TWELVE } from '../../shared/constants/FontConstant'
export const OTPVerificationStyle = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: LIGHTBLACK
    },
    modalView: {
        backgroundColor: WHITE,
        shadowColor: BLACK,
        shadowOpacity: 0.25,
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 30,
        width: widthPercentageToDP(80)
    },
    modalTextView: {
        fontSize: FONT_EIGHTEEN,
        fontWeight: '600',
        lineHeight: 20,
        color: VERYDARK_GRAYISHRED,
    },
    formbutton: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        marginHorizontal: 20
    },
    crossIcon: {
        alignItems: 'flex-end',
        marginHorizontal: 10
    },
    buttonYesStyle: {
        borderRadius: 5,
        elevation: 2,
        backgroundColor: PANTONE,
        height: 40,
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonNoStyle: {
        borderRadius: 5,
        elevation: 2,
        backgroundColor: BLUE_ALICE,
        height: 40,
        width: '40%',
        borderWidth: 1,
        borderColor: BROWN,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formNoTxt: {
        color: VERYDARK_GRAYISHRED,
        fontSize: FONT_SIXTENN,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    formYesTxt: {
        color: VERYDARK_GRAYISHRED,
        fontSize: FONT_SIXTENN,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    inputText: {
        height: 40,
        fontSize: FONT_SIXTENN,
        lineHeight: 30,
        marginHorizontal: 20,
        marginBottom: 10
    },
    crossIconView: {
        marginHorizontal: 10,
        marginBottom: 20,
        alignItems: 'center'
    },
    formTxt: {
        marginHorizontal: 20,
        marginTop: 5
    },
    erroFormTxt: {
        color: BGRED,
        fontSize: FONT_TWELVE,
        lineHeight: 13
    },
    emptyText: {
        width: 30,
    }
})