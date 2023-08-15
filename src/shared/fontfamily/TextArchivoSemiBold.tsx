import React from 'react';
import { Text } from 'react-native';
import { textCommonStyle } from '../commonStyle/textCommonStyle';

const TextArchivoSemiBold = ({ children, style, ...otherProps }:any) => {
    return <>
        <Text allowFontScaling={false} {...otherProps} style={{...textCommonStyle.textArchioBold, ...style}}>
            {children}
        </Text>
    </>

}
export default TextArchivoSemiBold;