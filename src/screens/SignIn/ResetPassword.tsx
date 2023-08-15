import React, { useState } from 'react';
import { View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import TopHeaderFixed from '../../shared/components/TopHeaderFixed';
import CustomTextInput from '../../components/inputs/CustomTextInput';
import TextArchivoBold from '../../shared/fontfamily/TextArchivoBold';
import CustomButton from '../../components/buttons/CustomButton';
import CustomFontText from '../../shared/fontfamily/CustomFontText';
import HideEyeIcon from '../../svg/HideEyeIcon';
import EyeIcon from '../../svg/EyeIcon';
import { SIGIN_SCREEN } from '../../routes/Routes';
import { SignInStyle } from './SignInStyle';
import { RootStackParamList } from '../../guards/AuthNavigator';
import ForgetImage from '../../svg/ForgetImage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ProfileIcon from '../../svg/ProfileIcon';

const ResetPassword: React.FC = (props: any) => {
    const userName = props?.route?.params?.userName || "";
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formValue, setFormValue] = useState({
        password: '',
        confirmPassword: ''
    });
    const [errorMsg, setErrorMsg]: any = useState({
        password: null,
        confirmPassword: null
    });
    const onChangePass = (name: any, text: any) => {
        setFormValue({ ...formValue, [name]: text.trim() });
        setErrorMsg({ ...errorMsg, [name]: text ? null : errorMsg[name] });
    }
    const validate = () => {
        const validFormValues: any = {
            password: "",
            confirmPassword: ""
        };
        let isValid = false;
        if (formValue.password.length == 0) {
            isValid = true;
            validFormValues.password = 'New password is required'
        } else if (formValue.password.length < 6) {
            isValid = true;
            validFormValues.password = 'Password should be at least 6 characters long'
        }
        if (formValue.confirmPassword.length == 0) {
            isValid = true;
            validFormValues.confirmPassword = 'Confirm password is required'
        }
        else if ((formValue.password) != (formValue.confirmPassword)) {
            isValid = true;
            validFormValues.confirmPassword = 'New password and confirm password should be same';
        }
        setErrorMsg(validFormValues);
        return isValid;
    }

    const handleSaveButtonPress = async () => {
        if (validate()) {
            return
        }
        const requestBody = {
            userName,
            password: formValue?.password,
            confirmPassword: formValue?.confirmPassword
        };
        try {
            setLoading(true);
            navigation.navigate(SIGIN_SCREEN)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prevShowPassword) => !prevShowPassword);
    };
    const onGoBack = () => {
        navigation.goBack()
    }
    return (
        <SafeAreaView style={SignInStyle.maincontainer}>
            <TopHeaderFixed
                headerTxt="Set Password"
                leftIconSize={20}
                leftIcon="arrow-back"
                onGoBack={() => onGoBack()}
                topHeight={100}>
            </TopHeaderFixed>
            <KeyboardAwareScrollView style={SignInStyle.mainTextView} showsVerticalScrollIndicator={false}>
                <ForgetImage />
                <View style={SignInStyle.mainView}>
                    <TextArchivoBold style={SignInStyle.loginWithText}>Set New Password</TextArchivoBold>
                    <View>
                        <CustomTextInput
                            mode="outlined"
                            placeholder="Username"
                            maxLength={20}
                            value={userName}
                            disabled={true}
                            style={SignInStyle.inputText}
                        />
                        <View style={SignInStyle.profileIconContainer}>
                            <ProfileIcon width={25} height={25} />
                        </View>
                        {errorMsg.userName &&
                            <View style={SignInStyle.formTxt}>
                                <CustomFontText style={SignInStyle.erroFormTxt}>{errorMsg.userName}</CustomFontText>
                            </View>
                        }
                    </View>
                    <View>
                        <CustomTextInput
                            mode="outlined"
                            placeholder="New Password"
                            maxLength={20}
                            value={formValue.password}
                            onChangeText={(text: any) => onChangePass("password", text)}
                            style={SignInStyle.inputText}
                            secureTextEntry={!showPassword}
                        />
                        <Pressable onPress={togglePasswordVisibility} style={SignInStyle.eyeIconContainer}>
                            {showPassword ? (
                                <EyeIcon width={25} height={25} />
                            ) : (
                                <HideEyeIcon width={25} height={25} />
                            )}
                        </Pressable>
                        {errorMsg.password &&
                            <View style={SignInStyle.formTxt}>
                                <CustomFontText style={SignInStyle.erroFormTxt}>{errorMsg.password}</CustomFontText>
                            </View>
                        }
                    </View>
                    <View>
                        <CustomTextInput
                            mode="outlined"
                            placeholder="Confirm Password"
                            maxLength={20}
                            value={formValue.confirmPassword}
                            onChangeText={(text: any) => onChangePass("confirmPassword", text)}
                            style={SignInStyle.inputText}
                            secureTextEntry={!showConfirmPassword}
                        />
                        <Pressable onPress={toggleConfirmPasswordVisibility} style={SignInStyle.eyeIconContainer}>
                            {showConfirmPassword ? (
                                <EyeIcon width={25} height={25} />
                            ) : (
                                <HideEyeIcon width={25} height={25} />
                            )}
                        </Pressable>
                        {errorMsg.confirmPassword &&
                            <View style={SignInStyle.formTxt}>
                                <CustomFontText style={SignInStyle.erroFormTxt}>{errorMsg.confirmPassword}</CustomFontText>
                            </View>
                        }
                    </View>
                    <CustomButton style={SignInStyle.signButton} textstyle={SignInStyle.buttonTextStyle} label="Update" onPress={() => handleSaveButtonPress()} isLoader={loading} />
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};
export default ResetPassword;
