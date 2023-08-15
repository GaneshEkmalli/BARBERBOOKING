import { StyleSheet } from "react-native";
import { BGRED, BLACK, BRIGHT_GRAY, BROWN_POD, LIGHTGREY, VERYDARK_GRAYISHRED, WHITE } from "../../shared/constants/color";
import { FONT_EIGHTEEN, FONT_FOURTEEN, FONT_SIXTENN, FONT_TWELVE, FONT_TWENTY } from "../../shared/constants/FontConstant";

export const SignInStyle = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: WHITE
    },
    txtForgotPassword: {
        color: BLACK,
        fontSize: FONT_FOURTEEN,
        marginHorizontal: 30
    },
    inputText: {
        fontSize: FONT_SIXTENN,
        height: 50,
        justifyContent: 'center',
        lineHeight: 30,
        backgroundColor: BRIGHT_GRAY,
        marginTop: 20,
        paddingRight: 45
    },
    mainTextView: {
        flex: 1,
    },
    mainView: {
        flex: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: BRIGHT_GRAY,
        borderBottomWidth: 0
    },
    signButton: {
        borderRadius: 20,
        marginHorizontal: 20,
        height: 50
    },
    buttonTextStyle: {
        fontSize: FONT_EIGHTEEN,
        fontWeight: '700',
        color: VERYDARK_GRAYISHRED,
        textAlign: 'center',
        lineHeight: 30
    },
    resetMainview: {
        flex: 1
    },
    clearBtn: {
        marginHorizontal: 0,
        width: '40%',
        backgroundColor: WHITE,
        borderColor: LIGHTGREY,
        borderWidth: 1,
    },
    textName: {
        color: BLACK,
    },
    loginWithText: {
        color: BROWN_POD,
        fontWeight: '600',
        fontSize: FONT_TWENTY,
        lineHeight: 30,
        paddingTop: 25
    },
    forgotView: {
        marginVertical: 10,
        alignSelf: 'flex-end'
    },
    emailView: {
        marginBottom: 20
    },
    textPass: {
        color: BLACK,
        marginTop: 20
    },
    formTxt: {
        marginTop: 10
    },
    erroFormTxt: {
        color: BGRED,
        fontSize: FONT_TWELVE,
        lineHeight: 13
    },
    mainButtonView: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    eyeIconContainer: {
        position: 'absolute',
        right: 0,
        marginTop: 40,
        paddingRight: 20
    },
    profileIconContainer: {
        position: 'absolute',
        right: 0,
        marginTop: 40,
        paddingRight: 20
    },
    forgotText: {
        color: VERYDARK_GRAYISHRED,
        fontSize: FONT_SIXTENN,
        fontWeight: '300',
        lineHeight: 20,
    },
    btnResetPassword: {
        marginHorizontal: 30
    },
    image: {
        height: 300,
        width: '90%',
        marginHorizontal: 20,
        marginBottom: 10,
    },
})

