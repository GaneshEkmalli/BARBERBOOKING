import { StyleSheet } from "react-native";
import { BLACK, GREEN, LIGHTBLACK, LIGHTBLUE, WHITE } from "../../shared/constants/color";

const DashboardStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: WHITE
    },
    mainView: {
        marginHorizontal: 20,
        marginVertical: 5,
        flex: 1
    },
    inputText1: {
        height: 40,
        fontSize: 14,
        lineHeight: 20,
    },
    loaderView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    renderItemView: {
        marginTop: 10,
        borderRadius: 5,
        elevation: 5,
        backgroundColor: LIGHTBLACK,
    },
    textStyle: {
        color: WHITE,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '900',
        lineHeight: 25
    },
    textStyle1: {
        color: WHITE,
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 20
    },
    textView: {
        backgroundColor: LIGHTBLUE,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 5
    }
})
export default DashboardStyle;
