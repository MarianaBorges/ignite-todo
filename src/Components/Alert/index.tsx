import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { theme } from "../../theme/theme";

interface AlerProps {
    isVisible?: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

function Alert({ isVisible = false , onConfirm, onCancel }: AlerProps){
    const [modalVisible, setModalVisible] = useState(isVisible);
    return (
        <View>
        <Modal
            testID="alert-modal"
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
         }}>
            <View style={styles.container}>
            <View style={styles.card}>
                <View>
                    <Text style={[styles.text, {fontFamily: theme.fonts.bold}]}>Atenção!</Text>
                    <Text style={styles.text}>Tem certeza que quer apagar essa tarefa?</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={[styles.button,{backgroundColor: theme.colors.danger}]} 
                        onPress={onConfirm}
                    >
                        <Text style={styles.textbutton}>Sim</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,{backgroundColor: theme.colors.blueDark}]} onPress={onCancel}>
                        <Text style={styles.textbutton}>Não</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        </Modal>
        </View>
    )
}

export { Alert }