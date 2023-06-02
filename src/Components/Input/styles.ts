import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 16,
        marginRight: 5,
        justifyContent: 'center',
        height: 54,
        backgroundColor: theme.colors.gray500,
        borderRadius: 6
    },
    input:{
        fontFamily: theme.fonts.regular,
        color: theme.colors.gray100
    }
});

export { styles }