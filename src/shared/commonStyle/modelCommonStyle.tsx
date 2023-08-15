import { StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import {  BGRED, BLACK, BROWN, BLUE_ALICE,  CYAN_BLUE,  GREEN,  JPURPLE, LIGHTBLACK, LIGHTGREY, WHITE } from '../constants/color';

export const modelCommonStyle = StyleSheet.create({
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
        paddingTop: 20,
        paddingBottom: 40,
        width: widthPercentageToDP(75)
    },
    modalText: {
        fontSize: 20,
        color: JPURPLE,
        lineHeight: 20,
        fontWeight: 'bold',
    },
    modalTextView: {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 20,
        color: CYAN_BLUE,
        alignSelf: 'center'
    },
    parentBtnView: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    buttonView: {
        width: widthPercentageToDP(20),
    },
    button: {
        borderRadius: 12,
        padding: 10,
        elevation: 2
    },
    buttonYesNo: {
        backgroundColor: BGRED,
        marginTop: 20,
        marginBottom: 10,
    },
    textStyle: {
        color: "white",
        fontSize: 16,
        lineHeight: 22,
        textAlign: "center"
    },
    formbutton: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center'
    },
    buttonYesStyle: {
        borderRadius: 5,
        elevation: 2,
        backgroundColor: BROWN,
        marginBottom: 10,
        marginTop: 20,
        height: 40,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formYesTxt: {
        color: WHITE,
        fontSize: 16,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    buttonNoStyle: {
        borderRadius: 5,
        elevation: 2,
        backgroundColor: BLUE_ALICE,
        height: 40,
        width: '60%',
        marginTop: 10,
        borderWidth: 1,
        borderColor: GREEN,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formNoTxt: {
        color: CYAN_BLUE,
        fontSize: 16,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    modalViewDocument: {
        backgroundColor: WHITE,
        shadowColor: BLACK,
        shadowOpacity: 0.25,
        padding: 10,
        borderRadius: 5,
        width: widthPercentageToDP(75)
    },
    imageViewIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    divider: {
        color: LIGHTGREY,
        height: 2,
        marginHorizontal: -10,
        marginVertical: 10
    },
    imageView: {
        height: 300
    },
    modalPresableViewDocument: {
        borderRadius: 5,
        elevation: 2,
        backgroundColor: BLUE_ALICE,
        marginVertical: 5,
        height: 40,
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: LIGHTGREY,
        borderWidth: 1
    },
    modalTextViewDocument: {
        color: JPURPLE,
        fontSize: 14,
        lineHeight: 22,
        fontWeight: '500'
    },
})
