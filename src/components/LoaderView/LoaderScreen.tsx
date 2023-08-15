import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { LoaderScreenStyle } from "./LoaderScreenStyle"
import CustomFontText from "../../shared/fontfamily/CustomFontText";
import { JPURPLE } from "../../shared/constants/color";

export const LoaderScreen = () => {
    const { loaderView, loaderText } = LoaderScreenStyle;
    return (
        <View style={loaderView}>
            <ActivityIndicator size="small" color={JPURPLE} />
            <CustomFontText style={loaderText}>Please Wait.....</CustomFontText>
        </View>
    )
} 
