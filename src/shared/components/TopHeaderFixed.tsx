
import React from 'react';
import { Icon } from '@rneui/themed';
import { Pressable, StyleSheet, View } from 'react-native';
import CustomFontText from '../fontfamily/CustomFontText';
import { VERYDARK_GRAYISHRED, CYAN_BLUE, WHITE } from '../constants/color';
import BackButtonIcon from '../../svg/BackButtonIcon';
import { FONT_EIGHTEEN } from '../constants/FontConstant';

const useStyles = (props: any) => StyleSheet.create({
    headerText: {
        fontSize: FONT_EIGHTEEN,
        fontWeight: '900',
        lineHeight: 33,
        color: CYAN_BLUE,
        marginHorizontal: 5,
    },
    backIconContainer: {
        backgroundColor: VERYDARK_GRAYISHRED,
        borderRadius: 8,
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    topHeader: {
        paddingVertical: 8,
        flexDirection: 'row',
        backgroundColor: WHITE,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    rightIcon: {
        flexDirection: 'column',
        marginLeft: 20,
        alignSelf: 'center'
    },
    viewSection: {
        flexDirection: 'row',
        flex: 1
    },
    iconView: {
        flexDirection: 'row',
        paddingLeft: 15,
    },
    scanView: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    }
});
const TopHeaderFixed = (props: any) => {
    const styles = useStyles(props);
    return (
        <View style={styles.topHeader}>
            {!!props.rightIconType && <View style={styles.rightIcon}>
                <Pressable onPress={() => props?.onSettingScreen()}>
                    <Icon name={props.rightIcon} type={props.rightIconType} size={props.rightIconSize} color={VERYDARK_GRAYISHRED}></Icon>
                </Pressable>
            </View>}
            <View style={styles.viewSection}>
                <View style={styles.iconView}>
                    {!!props.leftIcon &&
                        <Pressable onPress={() => props.onGoBack()}>
                            <BackButtonIcon width={25} height={33} />
                        </Pressable>}
                    <View>
                        <CustomFontText style={styles.headerText}>{props.headerTxt}</CustomFontText>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    {props?.scanIcon && <View style={styles.scanView}>
                        <Pressable style={{ marginRight: 30 }} onPress={() => props?.scanNavigation()}>
                            <Icon name={props.scanIcon} type={props.scanIconType} size={props.scanIconSize} color={CYAN_BLUE} />
                        </Pressable>
                    </View>}
                    {props?.logoutIcon && <View style={styles.scanView}>
                        <Pressable style={{ marginRight: 30 }} onPress={() => props?.logoutNavigation()}>
                            <Icon name={props.logoutIcon} type={props.logoutIconType} size={props.logoutIconSize} color={CYAN_BLUE} />
                        </Pressable>
                    </View>}
                </View>
            </View>
        </View>
    );
};
export default TopHeaderFixed;