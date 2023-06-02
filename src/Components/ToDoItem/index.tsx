import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from "../../theme/theme";
import { CheckButton } from "../CheckButton";
import { styles } from "./styles";
import { TaskProps } from "../../Screens/Home";

interface ToDoItemProps{
    item: TaskProps,
    onDelete: () => void;
    onFinish: () => void;
}

function ToDoItem({item, onDelete, onFinish}: ToDoItemProps){
    return (
        <View 
            accessibilityLabel="to-do-item"
            style={styles.container}
        >
            <CheckButton checked={item.done} onPress={onFinish} />
            
            <View style={styles.textContent}>
                <Text style={item.done ? styles.descriptionDone : styles.description}>
                    {item.description}
                </Text>
            </View>

            <TouchableOpacity 
                testID="button-delete"
                onPress={onDelete}
                activeOpacity={0.6}
            >
                <MaterialCommunityIcons 
                    name="trash-can-outline" 
                    size={18} 
                    color={theme.colors.gray300}
                />
            </TouchableOpacity>
        </View>
    )
}

export { ToDoItem }