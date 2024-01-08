import {StyleSheet} from "react-native";

export const globalStyles = StyleSheet.create({
    inputs: {
        height: "auto",
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'rgba(0,0,0,0.2)',
        borderRadius: 4,
        width: '100%',
        padding: 4,
        textAlign: "center"
    },
    button: {
      width: '100%'
    },
    page: {
        padding: 16
    },
    inputsHovered: {borderColor:'rgba(0,0,0,0)'}
});