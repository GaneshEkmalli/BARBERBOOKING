import React from 'react';
import { Text } from 'react-native';
import { textCommonStyle } from '../commonStyle/textCommonStyle';

const CustomFontText = ({ children, style, ...otherProps }: any) => {
    return <>
        <Text allowFontScaling={false} {...otherProps} style={{ ...textCommonStyle.customFontText, ...style }}>
            {children}
        </Text>
    </>

}
export default CustomFontText;

