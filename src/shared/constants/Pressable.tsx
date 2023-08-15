import React from 'react';
import { Pressable as Button } from 'react-native';

const Pressable = ({ children, style, ...otherProps }: any) => {
    return <>
        <Button {...otherProps} style={({ pressed }) => [
            { opacity: pressed ? 0.7 : 1.0, ...style }
        ]}>
            {children}
        </Button>
    </>

}
export default Pressable;