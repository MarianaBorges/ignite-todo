import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { theme } from "../../theme/theme";
import { styles } from "./styles";

interface InputProps extends TextInputProps{
    testID?: string;
}

function Input({testID, ...rest}: InputProps){
    return (
        <View style={styles.container}>
            <TextInput
                {...rest}
                testID="home-input-id"
                placeholderTextColor={theme.colors.gray300}
                style={styles.input}
            />
        </View>
    )
}

export { Input }