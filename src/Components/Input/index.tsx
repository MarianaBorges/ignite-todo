import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { theme } from "../../theme/theme";
import { styles } from "./styles";

interface InputProps extends TextInputProps{}

function Input({...rest}: InputProps){
    return (
        <View style={styles.container}>
            <TextInput
                {...rest}
                placeholderTextColor={theme.colors.gray300}
                style={styles.input}
            />
        </View>
    )
}

export { Input }