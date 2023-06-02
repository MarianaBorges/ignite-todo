import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.gray600
    },
    header: {
        width: '100%',
        height: 173,
        backgroundColor: theme.colors.gray700,
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginTop: -30
    }
})

export { styles }