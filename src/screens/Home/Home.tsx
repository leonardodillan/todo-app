import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Task } from "../../components/Task";

import { Ionicons } from '@expo/vector-icons'; 

export default function Home() {
    
    const [ tasks, setTasks ] = useState<string[]>([]);
    const [ taskName, setTaskName ] = useState('');
    const [ taskCount, setTaskCount ] = useState(0);
    const [ doneCount, setDoneCount ] = useState(0);

    function handleTaskAdd() {
        if(tasks.includes(taskName)) {
            return Alert.alert("Task existe", "Já existe essa task")
        }

        setTasks(prevState => [...prevState, taskName]);
        setTaskName('');
        setTaskCount((prevCount) => prevCount + 1);
    }

    function handleTaskRemove(name: string) {
        Alert.alert("Remover", `Remover a tarefa: "${name}"?`, [
            {   
                text: "Sim",
                onPress: () => {
                    setTasks(prevState => prevState.filter(task => task !== name));
                    setTaskCount((prevCount) => prevCount - 1);
                    if (tasks.includes(name)) {
                        setDoneCount((prevCount) => prevCount - 1); // Decrease doneCount if the task was marked as done
                    }
                }
                
            },
            {
                text: "Não",
                style: 'cancel'
            }
        ])
    }

    const updateDoneCount = () => {
        setDoneCount((prevCount) => prevCount + 1);
    };
    const decreaseDoneCount = () => {
        setDoneCount((prevCount) => prevCount - 1);
    };


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons style={styles.titleIcon} name="rocket-outline" color="#5E60CE" />
                <Text style={styles.title}>
                    to
                    <Text style={styles.titleMarked}>
                        do
                    </Text>
                </Text>
            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#6b6b6b"
                    onChangeText={setTaskName}
                    value={taskName}
                />

                <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

           <View style={styles.score}>
            <View style={styles.scoreLeft}>
                    <Text style={styles.scoreCreate}>Criadas </Text>
                    
                    <View style={styles.scoreResult}>
                        <Text style={styles.scoreText}>{taskCount}</Text>
                    </View>
                </View>
                <View style={styles.scoreRight}>
                    <Text style={styles.scoreConcluded}>Concluídas</Text>
                    <View style={styles.scoreResult}>
                        <Text style={styles.scoreText}>{doneCount}</Text>
                    </View>
                </View>
           </View>

            <FlatList
                data={tasks}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Task
                        key={item}
                        name={item}
                        onRemove={() => handleTaskRemove(item)}
                        updateDoneCount={updateDoneCount}
                        decreaseDoneCount={decreaseDoneCount}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <>
                        <Text style={styles.listEmptyText}>
                            Você não tem tarefas cadastradas!
                        </Text>
                        <Text style={styles.listEmptyTextTwo}>
                            Organize seus itens a fazer
                        </Text>
                    </>
                )}
            />
        </View>
    )
}