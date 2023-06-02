import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

const styles = StyleSheet.create({
    container:{
        height: 200,
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        marginTop: 20,
        fontSize: 14,
        color: theme.colors.gray300
    }
})

export { styles }