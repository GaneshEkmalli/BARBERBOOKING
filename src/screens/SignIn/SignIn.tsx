import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EMAIL_SPACE_REGEX, USERNAME_SPACE_REGEX } from '../../shared/constants/regular-expressions-utilities';
import CustomTextInput from '../../components/inputs/CustomTextInput';
import TextArchivoBold from '../../shared/fontfamily/TextArchivoBold';
import CustomButton from '../../components/buttons/CustomButton';
import CustomFontText from '../../shared/fontfamily/CustomFontText';
import { SignInStyle } from './SignInStyle';
import HideEyeIcon from '../../svg/HideEyeIcon';
import EyeIcon from '../../svg/EyeIcon';
import SignInImage from '../../svg/SignInImage';
import { FORGET_SCREEN } from '../../routes/Routes';
import api from '../../api/api';
import { useDispatch } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RootStackParamList } from '../../guards/AuthNavigator';
import Pressable from '../../shared/constants/Pressable';
import ProfileIcon from '../../svg/ProfileIcon';
import { AUTH_TYPE } from '../../redux/action/authAction';

const SignIn: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    userName: '',
    password: ''
  });
  const [errorMsg, setErrorMsg]: any = useState({
    userName: null,
    password: null
  });
  const onChangePass = (name: any, text: any) => {
    setFormValue({ ...formValue, [name]: text.trim() });
    setErrorMsg({ ...errorMsg, [name]: text ? null : errorMsg[name] });
  }
  const onChangeFormName = (name: any, text: any) => {
    setFormValue({ ...formValue, [name]: text.replace(EMAIL_SPACE_REGEX, "") });
    setErrorMsg({ ...errorMsg, [name]: text ? null : errorMsg[name] });
  }
  const validate = () => {
    const validFormValues: any = {
      userName: "",
      password: ""
    };
    let isValid = false;
    if (formValue.userName.length == 0) {
      isValid = true;
      validFormValues.userName = "User Name is Required"
    } else if (formValue.userName.length < 5) {
      isValid = true;
      validFormValues.userName = 'User name should be at least 6-20 characters long'
    }
    if (formValue.password.length == 0) {
      isValid = true;
      validFormValues.password = 'Password is required'
    } else if (formValue.password.length < 6) {
      isValid = true;
      validFormValues.password = 'Password should be at least 6-20 characters long'
    }
    setErrorMsg(validFormValues);
    return isValid;
  }

  const handleSaveButtonPress = async () => {
    dispatch({ type: AUTH_TYPE.GET_USER_DETAILS, payload: {name:"Ganesh"} })
    if (validate()) {
      return
    }
    if (!formValue.userName || !formValue.password) {
      Alert.alert('All fields are required');
      return;
    }
    const requestBody = {
      userName: formValue?.userName,
      password: formValue?.password,
    };
    try {
      setLoading(true);
      const response = await api.SignIn(requestBody)
      if (response?.data && response?.data?.accessToken) {
        await AsyncStorage.setItem('accessToken', response?.data?.accessToken);
        const userDetails = await api.getUserDetails();
        if (userDetails?.data) {
          dispatch({ type: AUTH_TYPE.GET_USER_DETAILS, payload: userDetails?.data })
        }
      } else {
        Alert.alert('Incorrect input');
      }
    } catch (error: any) {
      Alert.alert(
        'Error', error?.response?.data?.error?.message,
        [
          { text: 'Ok', style: 'default', }
        ],
        {
          cancelable: false
        }
      );
    } finally {
      setLoading(false);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleForgotPassword = () => {
    navigation.navigate(FORGET_SCREEN)
    setFormValue({
      userName: '',
      password: '',
    });
  };

  return (
    <SafeAreaView style={SignInStyle.maincontainer}>
      <KeyboardAwareScrollView style={SignInStyle.mainTextView} showsVerticalScrollIndicator={false}>
        <SignInImage />
        <View style={SignInStyle.mainView}>
          <TextArchivoBold style={SignInStyle.loginWithText}>Login with</TextArchivoBold>
          <View>
            <CustomTextInput
              mode="outlined"
              placeholder="Email"
              maxLength={50}
              value={formValue.userName}
              onChangeText={(text: any) => onChangeFormName("userName", text)}
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
              placeholder="Password"
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
          <Pressable onPress={() => handleForgotPassword()} style={SignInStyle.forgotView}><TextArchivoBold style={SignInStyle.forgotText}>Forgot password ?</TextArchivoBold></Pressable>
          <CustomButton style={SignInStyle.signButton} textstyle={SignInStyle.buttonTextStyle} label={"Login"} onPress={() => handleSaveButtonPress()} isLoader={loading} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default SignIn;
