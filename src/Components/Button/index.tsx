import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { theme } from "../../theme/theme";
import { styles } from "./styles";

function Button({...rest}: TouchableOpacityProps) {
    return (
        <TouchableOpacity 
            activeOpacity={0.8}
            testID="button-add" 
            style={styles.container}
            {...rest}
        >
            <AntDesign 
                name="pluscircleo" 
                size={16} 
                color={theme.colors.gray100} 
            />
        </TouchableOpacity>
    )
}

export { Button }