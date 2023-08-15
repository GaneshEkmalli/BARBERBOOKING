import React from 'react';
import { Modal, View, TouchableOpacity, Image } from 'react-native';
import { Icon } from '@rneui/base';
import Pressable from '../constants/Pressable';
import { JPURPLE } from '../constants/color';
import { Divider } from 'react-native-paper';
import CustomFontText from '../fontfamily/CustomFontText';
import { modelCommonStyle } from '../commonStyle/modelCommonStyle';

const AlertModalDocument = (props: any) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                props.onCancel();
            }}
            statusBarTranslucent
        >
            <View style={modelCommonStyle.centeredView}>
                <View style={modelCommonStyle.modalViewDocument}>
                    {props.viewImage &&
                        <View>
                            <TouchableOpacity style={modelCommonStyle.imageViewIcon} onPress={() => props.onCancel()}>
                                <Icon name="cross" type='entypo' size={25} color={JPURPLE} />
                            </TouchableOpacity>
                            <Divider style={modelCommonStyle.divider} />
                            <Image source={{ uri: props.viewImage }} style={modelCommonStyle.imageView} />
                            <Divider style={modelCommonStyle.divider} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                <Pressable
                                    style={modelCommonStyle.modalPresableViewDocument}
                                    onPress={() => { props.onProceed3() }}
                                >
                                    <CustomFontText style={modelCommonStyle.modalTextViewDocument}>{props.btn3}</CustomFontText>
                                </Pressable>

                                <Pressable
                                    style={modelCommonStyle.modalPresableViewDocument}
                                    onPress={() => { props.onProceed1() }}
                                >
                                    <CustomFontText style={modelCommonStyle.modalTextViewDocument}>{props.btn1}</CustomFontText>
                                </Pressable>

                            </View>
                        </View>
                    }
                </View>
            </View>
        </Modal >
    )

}
export default AlertModalDocument;