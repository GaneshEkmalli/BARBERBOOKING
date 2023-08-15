import React from 'react';
import { Modal, View } from 'react-native';
import CustomFontText from '../fontfamily/CustomFontText';
import Pressable from '../constants/Pressable';
import { modelCommonStyle } from '../commonStyle/modelCommonStyle';

const AlertModal = (props: any) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                props.onCancel();
            }}
            statusBarTranslucent
        >
            <View style={modelCommonStyle.centeredView}>
                <View style={modelCommonStyle.modalView}>
                    <View>
                        <CustomFontText style={modelCommonStyle.modalText}>{props.header}</CustomFontText>
                        <View style={{ marginBottom: 5 }}>
                            <CustomFontText style={modelCommonStyle.modalTextView}>{props.firstLineContent}</CustomFontText>
                        </View>
                    </View>
                    {
                        props.header === "Confirmation" ?
                            <View style={modelCommonStyle.parentBtnView}>
                                <View style={modelCommonStyle.buttonView}>
                                    <Pressable
                                        style={[modelCommonStyle.button, modelCommonStyle.buttonYesNo]}
                                        onPress={() => { props.setModalVisible(false); props.onCancel() }}
                                    >
                                        <CustomFontText style={modelCommonStyle.textStyle}>{props.no}</CustomFontText>
                                    </Pressable>
                                </View>
                                <View style={modelCommonStyle.buttonView}>
                                    <Pressable
                                        style={[modelCommonStyle.button, modelCommonStyle.buttonYesNo]}
                                        onPress={() => { props.setModalVisible(false), props.onProceed() }}
                                    >
                                        <CustomFontText style={modelCommonStyle.textStyle}>{props.yes}</CustomFontText>
                                    </Pressable>
                                </View>
                            </View> :
                            <View style={modelCommonStyle.formbutton}>
                            <Pressable
                                style={modelCommonStyle.buttonYesStyle}
                                onPress={() => { props.setModalVisible(false), props.onProceed() }}
                            >
                                <CustomFontText style={modelCommonStyle.formYesTxt}>{props.btn}</CustomFontText>
                            </Pressable>
                            <Pressable
                                style={modelCommonStyle.buttonNoStyle}
                                onPress={() => props.onCancel()}>
                                <CustomFontText style={modelCommonStyle.formNoTxt}>{props.no}</CustomFontText>
                            </Pressable>
                        </View>
                    }
                </View>
            </View>
        </Modal >
    )

}
export default AlertModal;