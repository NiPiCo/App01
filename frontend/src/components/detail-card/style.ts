import {StyleSheet} from "react-native";

export const detailCardStyle = StyleSheet.create({
    textContainer: {
        display: "flex",
        flexDirection: "column",
        paddingTop: 12,
        width: '100%',
        borderStyle: "solid",
        borderTopWidth: 1,
        borderColor: 'rgba(0,0,0,0.4)',
        gap: 8,
        justifyContent: 'flex-start'
    },
    image: {
        paddingBottom: 12,
        width: '100%'
    },
    textRow: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between"
    }
});