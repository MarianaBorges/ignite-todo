import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Feather, Entypo } from '@expo/vector-icons';
import { styles } from "./styles";
import { theme } from "../../theme/theme";

interface CheckButtonProsp {
    onPress: () => void;
    checked?: boolean;
}

function CheckButton({onPress, checked = false}: CheckButtonProsp){
    return (
        <TouchableOpacity 
            testID="check-button" 
            activeOpacity={0.6}
            onPress={onPress}
        >
            { checked ?
                <View 
                    testID="check-icon"
                    style={styles.checkContainer}
                >
                    <Feather 
                        name="check" 
                        size={12} 
                        color={theme.colors.gray100}
                    />
                </View>
                :
                <View 
                    testID="circle-icon" 
                >
                    <Entypo 
                        name="circle" 
                        size={18} 
                        color={theme.colors.blue} 
                    />
                </View>
            }
        </TouchableOpacity>
    )
}

export { CheckButton }