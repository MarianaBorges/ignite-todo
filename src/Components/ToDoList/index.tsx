import React from "react";
import { Text, View, FlatList, FlatListProps } from "react-native";
import { TaskProps } from "../../Screens/Home";
import { styles } from "./styles";
import { theme } from "../../theme/theme";
import { EmptyList } from "../EmptyList";

interface ToDoListProps extends FlatListProps<TaskProps>{
    created: number;
    concluded: number;
}

interface CountProps {
    title: string;
    count: number;
    color: string;
    countTestId?: string;
}

function Count({title, count, color, countTestId}: CountProps) {
    return (
        <View style={styles.counts}>
            <Text
                testID={`count-title-${countTestId}`}
                style={[styles.titleCount, {color: color}]}
            >
                    {title}
            </Text>
            <View style={styles.countCircle}>
                <Text testID={`count-${countTestId}`} style={styles.titleCount}>{count}</Text>
            </View>
        </View>
    )
}


function ToDoList({created, concluded, ... rest}: ToDoListProps){
    return (
        <View style={styles.container}>
            <View style={styles.contentCounts}>
                <Count
                    title='Criadas'
                    countTestId={'created'} 
                    count={created} 
                    color={theme.colors.blue}
                />
                <Count
                    title='Concluídas'
                    countTestId={'concluded'}  
                    count={concluded} 
                    color={theme.colors.purple}
                />
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