import React from 'react';
import { TextInput } from 'react-native-paper';
import { ARCHIVO_SEMIBOLD} from '../../shared/constants/color';

const CustomTextInput = ({children, ...otherProps } : any) => {
    return <>
        {otherProps.showCalander ? <TextInput
            {...otherProps}
            theme={
                {
                    fonts: {
                        regular: {
                            fontFamily: ARCHIVO_SEMIBOLD
                        }
                    },

                }
            }
            mode="outlined"
            right={<TextInput.Icon icon={otherProps.right} size={25} style={{ marginTop: 14,marginRight:0 }} onPress={() => otherProps.onOpenCalender()} />}
        >
            {children}
        </TextInput> : <TextInput
            {...otherProps}
            theme={
                {
                    fonts: {
                        regular: {
                            fontFamily: ARCHIVO_SEMIBOLD
                        }
                    },

                }
            }
            mode="outlined"
        >
            {children}
        </TextInput>
        }
    </>

}
export default CustomTextInput;