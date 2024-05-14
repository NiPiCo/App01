import {StyleSheet} from "react-native";

export const style = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        borderStyle:'solid',
        display: "flex",
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 8,
        paddingTop: 8,
    },
    image:{
        borderRadius: 50,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: '#48ce1d'
    },
    wrapper1:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        width: '100%'
    },
    wrapper2:{
        display: 'flex'
    },
    centerText: {
        textAlign: 'center'
    }
});