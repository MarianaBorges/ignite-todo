import { Text, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { theme } from "../../theme/theme"
import { styles } from "./styles";

function EmptyList(){
    return (
        <View style={styles.container}>
            <AntDesign 
                name="file1" 
                size={65} 
                color={theme.colors.gray300}
            />
            <Text style={[styles.text,{fontFamily: theme.fonts.bold}]}>
                Você ainda não tem tarefas cadastradas{`\n`}
                <Text style={{fontFamily: theme.fonts.regular}}>
                    Crie tarefas e organize seus itens a fazer
                </Text>
            </Text>
        </View>
    )
}

export { EmptyList }