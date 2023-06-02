import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        width: 54,
        height: 54,
        backgroundColor: theme.colors.blueDark,
    }
})

export { styles }