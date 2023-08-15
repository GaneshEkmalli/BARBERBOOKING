import React from 'react'
import { View, StyleSheet } from 'react-native'
import CustomFontText from '../fontfamily/CustomFontText'
import { BLACK, SPANISH_GRAY } from './color'
import NoRecordImage from '../../svg/NoRecordImage'
import { FONT_FIFTEEN, FONT_TWELVE } from './FontConstant'

const NoRecordFound = (props: any) => {
    return (
        <View style={styles.loaderView}>
            <NoRecordImage width={150} height={200} />
            <CustomFontText style={styles.textStyle}>{props?.title}</CustomFontText>
            <CustomFontText style={styles.textStyle1}>{props?.text}</CustomFontText>
        </View>
    )
}

export default NoRecordFound
export const styles = StyleSheet.create({
    loaderView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 90
    },
    textStyle: {
        color: BLACK,
        fontSize: FONT_FIFTEEN,
        fontWeight: '500',
        lineHeight: 20
    },
    textStyle1: {
        color: SPANISH_GRAY,
        fontSize: FONT_TWELVE,
        fontWeight: '300',
        lineHeight: 20
    },
})