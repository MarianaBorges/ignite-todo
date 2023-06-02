import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 12,
        marginBottom: 8,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: theme.colors.gray500,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: theme.colors.gray400
    },
    textContent: {  
        flex: 1,
        marginHorizontal: 8  
    }, 
    description: {
        fontFamily: theme.fonts.regular,
        fontSize: 13,
        color: theme.colors.gray100
    },
    descriptionDone: {
        fontFamily: theme.fonts.regular,
        fontSize: 13,
        color: theme.colors.gray300,
        textDecorationLine: 'line-through'
    }
});

export { styles }