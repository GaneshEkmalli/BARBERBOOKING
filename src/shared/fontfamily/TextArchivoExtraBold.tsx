import React from 'react';
import { Text } from 'react-native';
import { textCommonStyle } from '../commonStyle/textCommonStyle';

const TextArchivoExtraBold = ({ children, style, ...otherProps }:any) => {
    return <>
        <Text allowFontScaling={false} {...otherProps} style={{ ...textCommonStyle.textPoppinsExtraBold, ...style }}>
            {children}
        </Text>
    </>

}
export default TextArchivoExtraBold;