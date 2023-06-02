import { StyleSheet } from "react-native";import { theme } from "../../theme/theme";
7

const styles = StyleSheet.create({
    checkContainer: {
        width: 18,
        height: 18,

        justifyContent: "center",
        alignItems: "center",

        borderRadius: 9,
        backgroundColor: theme.colors.purpleDark
    }
})

export { styles }