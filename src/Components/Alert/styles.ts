import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    card:{
        backgroundColor: theme.colors.gray400,
        borderRadius: 8,
        padding: 15,
        shadowColor: theme.colors.gray300,
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 20
    }, 
    button:{
        borderRadius: 10,
        width: 60,
        justifyContent: "center",
        alignItems: 'center',
        padding: 5
    },
    textbutton:{
        fontSize: 14,
        color: theme.colors.gray100,
        fontFamily: theme.fonts.bold
    },
    text:{
        fontSize: 14,
        color: theme.colors.gray200
    }
});

export { styles }