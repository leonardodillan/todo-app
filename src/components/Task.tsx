import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

import { styles } from './styles'
import { useState } from "react";

type Props = {
    name: string;
    onRemove: () => void;
    updateDoneCount: () => void;
    decreaseDoneCount: () => void;
}

export function Task({ name, onRemove, updateDoneCount, decreaseDoneCount }: Props) {

    const [isMarked, setIsMarked] = useState(false);

    const handleMark = () => {
        setIsMarked(!isMarked);
        {isMarked ? (
            decreaseDoneCount()
            
        ): (
            updateDoneCount()
        )}
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={handleMark}>
                {isMarked ? (
                    <AntDesign style={styles.buttonMark} name="checkcircle" size={21} color="#5E60CE" />
                ) : (
                    <Entypo style={styles.buttonMark} name="circle" size={21} color="#4EA8DE" />
                )}
            </TouchableOpacity>

            <Text style={[styles.name, isMarked ? styles.nameStriked : null]}>
                {name}
            </Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Ionicons name="trash" size={20} color="#808080"/>
            </TouchableOpacity>
        </View>
    );
}

// PARA ESSA APLICAÇÃO PRECISO ATUALIZART O NUMERO DE CRIADAS E CONCLUIDAS 
// A PARTIR DO MOMENTO QUE UMA TAREFA É EXCLUIDA