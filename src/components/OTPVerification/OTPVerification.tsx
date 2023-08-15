import React from 'react';
import { Modal, View, TouchableOpacity } from 'react-native';
import { OTPVerificationStyle } from './OTPVerificationStyle';
import { Icon } from '@rneui/themed';
import { VERYDARK_GRAYISHRED } from '../../shared/constants/color';
import CustomFontText from '../../shared/fontfamily/CustomFontText';
import CustomTextInput from '../inputs/CustomTextInput';
import Pressable from '../../shared/constants/Pressable';
import TextArchivoBold from '../../shared/fontfamily/TextArchivoBold';


const OTPVerification = (props: any) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                props.setModalVisible(false);
            }}
            statusBarTranslucent
        >
            <View style={OTPVerificationStyle.centeredView}>
                <View style={OTPVerificationStyle.modalView}>
                    <TouchableOpacity onPress={() => props.setModalVisible(false)} style={OTPVerificationStyle.crossIcon}>
                        <Icon name="circle-with-cross" type='entypo' size={30} color={VERYDARK_GRAYISHRED} />
                    </TouchableOpacity>
                    <View style={OTPVerificationStyle.crossIconView}>
                        <CustomFontText style={OTPVerificationStyle.modalTextView}>{props.firstLineContent}</CustomFontText>
                    </View>
                    <View>
                        <CustomTextInput
                            mode="outlined"
                            keyboardType='numeric'
                            placeholder="Enter OTP"
                            maxLength={6}
                            style={OTPVerificationStyle.inputText}
                            value={props.otp}
                            onChangeText={(value: any) => props.onValueChangeRemark('otp', value)}
                        />
                        {props.errorMsg &&
                            <View style={OTPVerificationStyle.formTxt}>
                                <CustomFontText style={OTPVerificationStyle.erroFormTxt}>{props.errorMsg}</CustomFontText>
                            </View>
                        }
                    </View>
                    <View style={OTPVerificationStyle.formbutton}>
                        {props.timer > 0 ? <Pressable
                            style={OTPVerificationStyle.buttonNoStyle}
                        >
                            <TextArchivoBold style={OTPVerificationStyle.formNoTxt}>{props.timer}</TextArchivoBold>
                        </Pressable> :
                            <Pressable
                                style={OTPVerificationStyle.buttonNoStyle}
                                onPress={() => props.onResend()}>
                                <TextArchivoBold style={OTPVerificationStyle.formNoTxt}>{props.btnResend}</TextArchivoBold>
                            </Pressable>
                        }
                        <Pressable
                            style={OTPVerificationStyle.buttonYesStyle}
                            onPress={() => { props.onSubmit() }}
                        >
                            <TextArchivoBold style={OTPVerificationStyle.formYesTxt}>{props.btnSubmit}</TextArchivoBold>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal >
    )

}
export default OTPVerification;