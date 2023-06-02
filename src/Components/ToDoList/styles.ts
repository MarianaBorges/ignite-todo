import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    contentCounts:{
        flexDirection: "row", 
        justifyContent:"space-between",
        marginTop: 12,
        marginBottom: 20, 
    },
    counts: {
        flexDirection: 'row', 
        marginBottom: 10
    },
    titleCount:{
        fontFamily: theme.fonts.bold,
        fontSize: 14,
        color: theme.colors.gray200,
        textAlign:"center"
    },
    countCircle: {
        width: 24,
        height: 19,
        borderRadius: 999,
        marginLeft: 5,
        backgroundColor: theme.colors.gray400,
    }
})

export { styles }