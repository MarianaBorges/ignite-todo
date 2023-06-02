import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { styles } from "./styles";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { ToDoItem } from "../../Components/ToDoItem";
import { ToDoList } from "../../Components/ToDoList";
import { Logo } from "../../Components/Logo";

const DATA = [
    {
        id: "1",
        description: "Uma nova coisa a fazer",
        done: false
    },
    {
        id: "2",
        description: "Uma nova coisa a fazer",
        done: true
    },
    {
        id: "3",
        description: "Uma nova coisa a fazer",
        done: true
    },
    {
        id: "4",
        description: "Uma nova coisa a fazer",
        done: true 
    }
];

export interface TaskProps {
    id: string;
    description: string;
    done: boolean;
}

function Home(){

    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [task, setTask] = useState('');

    function addNewTask(){
        if (task){
            const idTask = new Date().getMilliseconds();
            const newTask = {
                id: idTask.toString(),
                description: task,
                done: false
            }
            setTasks(prevStatus => [newTask, ...prevStatus]);
            setTask('');
        } else {
            Alert.alert('Ops!', "Informe uma task =]");
        }
    }

    function finishTask(id: string){
        const updatedTask = tasks.filter(oldTask => {
            if (oldTask.id === id) {
                oldTask.done = !oldTask.done;
            }
            return oldTask;
        });
        
        setTasks(updatedTask);
    }

    function deleteTask(id: string){
        Alert.alert('Atenção', 'Tem certeza que quer apagar essa tarefa?', [
            {
              text: 'Não',
              onPress: () => {},
              style: 'cancel',
            },
            {text: 'Sim', onPress: () => setTasks(prevStatus => prevStatus.filter(oldTask => oldTask.id != id))}
        ]);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Logo />
            </View>
            <View style={styles.input}>
                <Input 
                    value={task}
                    onChangeText={(text)=> setTask(text)} 
                    placeholder="Adicione uma nova tarefa"
                />
                <Button onPress={() => addNewTask()}/>
            </View>
            
            <ToDoList 
                created={tasks.length}
                concluded={tasks.filter(task => task.done === true).length}
                data={tasks}
                renderItem={({item}) => 
                    (<ToDoItem 
                        item={item} 
                        onDelete={() => deleteTask(item.id)}
                        onFinish={() => finishTask(item.id)}
                    />)}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export { Home }