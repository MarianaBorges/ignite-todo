import React from "react";
import { Text, View, FlatList, FlatListProps } from "react-native";
import { ItemProps } from "../ToDoItem";
import { styles } from "./styles";
import { theme } from "../../theme/theme";
import { EmptyList } from "../EmptyList";

interface ToDoListProps extends FlatListProps<ItemProps>{
    created: number;
    concluded: number;
}


function ToDoList({created, concluded, ... rest}: ToDoListProps){
    return (
        <View style={styles.container}>
            <View style={styles.contentCounts}>
                <View style={styles.counts}>
                    <Text style={[styles.titleCount, {color: theme.colors.blue}]}>Criadas</Text>
                    <View style={styles.countCircle}>
                        <Text style={styles.titleCount}>{created}</Text>
                    </View>
                </View>
                <View style={styles.counts}>
                    <Text style={[styles.titleCount, {color: theme.colors.purple}]}>Concluídas</Text>
                    <View style={styles.countCircle}>
                        <Text style={styles.titleCount}>{concluded}</Text>
                    </View>
                </View>
                </View>
            <FlatList 
                testID="list"
                ListEmptyComponent={<EmptyList />}
                { ...rest } 
            />
        </View>
    )
}

export { ToDoList }