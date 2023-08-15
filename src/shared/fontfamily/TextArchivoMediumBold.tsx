import React from 'react';
import { Text } from 'react-native';
import { textCommonStyle } from '../commonStyle/textCommonStyle';

const TextArchivoMediumBold = ({ children, style, ...otherProps }:any) => {
    return <>
        <Text allowFontScaling={false} {...otherProps} style={{...textCommonStyle.textPoppinsMediumBold, ...style}}>
            {children}
        </Text>
    </>

}
export default TextArchivoMediumBold;