import React from 'react';
import { Pressable } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import TextArchivoBold from '../../shared/fontfamily/TextArchivoBold';
import { VERYDARK_GRAYISHRED } from '../../shared/constants/color';
import { buttonCommonStyle } from '../../shared/commonStyle/buttonCommonStyle';

const CustomButton = (props: any) => {
    return <>
        <Pressable allowFontScaling={false} {...props} style={{ ...buttonCommonStyle.buttonStyle, ...props.style }}>
            {!props.isLoader ? <TextArchivoBold style={{ ...buttonCommonStyle.buttonText, ...props.textstyle }}>
                {props.label}
            </TextArchivoBold> :
                <ActivityIndicator color={VERYDARK_GRAYISHRED} />}
        </Pressable>
    </>
}
export default CustomButton;