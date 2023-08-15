import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, View, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import TextArchivoBold from '../../shared/fontfamily/TextArchivoBold';
import CustomButton from '../../components/buttons/CustomButton';
import CustomTextInput from '../../components/inputs/CustomTextInput';
import TopHeaderFixed from '../../shared/components/TopHeaderFixed';
import { RESET_PASSWORD } from '../../routes/Routes';
import CustomFontText from '../../shared/fontfamily/CustomFontText';
import { EMAIL_REGEX, EMAIL_SPACE_REGEX } from '../../shared/constants/regular-expressions-utilities';
import { RootStackParamList } from '../../guards/AuthNavigator';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SignInStyle } from './SignInStyle';
import ProfileIcon from '../../svg/ProfileIcon';
import ForgetImage from '../../svg/ForgetImage';
import OTPVerification from '../../components/OTPVerification/OTPVerification';

const ForgetPassword = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [loading, setLoading] = useState(false);
    const [timer, setTimer] = useState(0);
    const [userName, setUserName]: any = useState()
    const [verificationKey, setVerificationKey] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [formValue, setFormValue] = useState({
        email: '',
        otp: '',
    });
    const [errorMsg, setErrorMsg]: any = useState({
        email: null,
        otp: null
    });

    useEffect(() => {
        setFormValue({
            email: '',
            otp: '',
        });
    }, []);
    useEffect(() => {
        let intervalId: any;
        if (timer > 0) {
            intervalId = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [timer]);
    const onChangeForm = (name: any, text: any) => {
        setFormValue({ ...formValue, [name]: text.replace(EMAIL_SPACE_REGEX, "") })
        setErrorMsg({ ...errorMsg, [name]: text ? null : errorMsg[name] });
    }
    const validate = () => {
        const validFormValues: any = {
            email: '',
        };
        let isValid = false;
        if (formValue.email.length == 0) {
            isValid = true;
            validFormValues.email = "Email is Required"
        }
        if (!EMAIL_REGEX.test(formValue.email?.trim().toString())) {
            validFormValues.email = "Please enter a valid Email Address"
            isValid = true;
        }
        setErrorMsg(validFormValues);
        return isValid;
    }
    const handleForgotPassword = async () => {
        if (validate()) {
            return
        }
        const requestBody = {
            emailId: formValue.email,
        };
        try {
            setLoading(true);
            ToastAndroid.show('Email sent ! Please check your email', ToastAndroid.LONG);
            setTimer(60);
            setModalVisible(true)
        } catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false);
        }
    };
    const onGoBack = () => {
        navigation.goBack()
    }
    const validateOtp = () => {
        const validFormValues = {
            otp: '',
        };
        let isValid = false;
        if (!formValue?.otp) {
            validFormValues.otp = "Otp is compulsory"
            isValid = true;
        }
        else if (formValue?.otp.length < 6) {
            validFormValues.otp = "Enter Valid Otp"
            isValid = true;
        }
        setErrorMsg(validFormValues);
        return isValid;
    }
    const onSubmitOtp = async () => {
        if (validateOtp()) {
            return
        }
        const requestBody = {
            verificationKey,
            otp: formValue?.otp
        }
        try {
            ToastAndroid.show('Otp successfully verified', ToastAndroid.LONG);
            setModalVisible(false)
            navigation.navigate(RESET_PASSWORD, { userName: userName })
        } catch (error) {
            console.log(error)
            setErrorMsg({ ...errorMsg, otp: 'Enter Valid Otp' })
        }

    }
    const onValueChangeRemark = (name: string, value: any) => {
        setFormValue({ ...formValue, [name]: value });
        setErrorMsg({ ...errorMsg, [name]: value ? null : errorMsg[name] });
    };
    const onResendOtp = () => {
        handleForgotPassword()
    }
    return (
        <SafeAreaView style={SignInStyle.maincontainer}>
            <TopHeaderFixed
                headerTxt="Forget Password"
                leftIconSize={20}
                leftIcon="arrow-back"
                onGoBack={() => onGoBack()}
                topHeight={100}>
            </TopHeaderFixed>
            <KeyboardAwareScrollView style={SignInStyle.mainTextView} showsVerticalScrollIndicator={false}>
                <ForgetImage />
                <View style={SignInStyle.mainView}>
                    <TextArchivoBold style={SignInStyle.loginWithText}>Forget with</TextArchivoBold>
                    <View style={SignInStyle.emailView}>
                        <CustomTextInput
                            mode="outlined"
                            label="Email"
                            maxLength={50}
                            value={formValue.email}
                            onChangeText={(text: any) => onChangeForm("email", text)}
                            style={SignInStyle.inputText}
                        />
                        <View style={SignInStyle.profileIconContainer}>
                            <ProfileIcon width={25} height={25} />
                        </View>
                        {errorMsg.email &&
                            <View style={SignInStyle.formTxt}>
                                <CustomFontText style={SignInStyle.erroFormTxt}>{errorMsg.email}</CustomFontText>
                            </View>
                        }
                    </View>
                    <CustomButton style={SignInStyle.signButton} textstyle={SignInStyle.buttonTextStyle} label={"Forget"} onPress={() => handleForgotPassword()} isLoader={loading} />
                </View>
            </KeyboardAwareScrollView>
            <OTPVerification modalVisible={modalVisible} setModalVisible={setModalVisible} onValueChangeRemark={onValueChangeRemark} timer={timer} otp={formValue?.otp} errorMsg={errorMsg.otp}
                firstLineContent="Verify OTP"
                btnSubmit="Submit"
                btnResend="Resend"
                onSubmit={() => onSubmitOtp()}
                onResend={() => onResendOtp()}
            ></OTPVerification>
        </SafeAreaView>
    );
};

export default ForgetPassword;