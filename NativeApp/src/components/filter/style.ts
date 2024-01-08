import {StyleSheet} from "react-native";

export const filterStyle = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        paddingBottom: 12,
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.4)',
        gap: 8
    },
    picker:{
        paddingLeft: 8,
        paddingRight: 8
    }
});