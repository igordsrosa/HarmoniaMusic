import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    logo: {
        width: 300,
        height: 300,
        alignSelf: "center"
    },
    sobre:{
        backgroundColor: "#33C1BA",
        paddingVertical: 8,
        paddingHorizontal: 16,
      },
    textoSobre: {
        fontSize: 20,
        lineHeight: 26,
        color: "black",
        textAlign: "center",
        fontWeight: 'bold'
    },
    textoContato: {
        fontSize: 20,
        lineHeight: 26,
        color: "black",
        textAlign: "justify",
        fontWeight: 'bold'
    },
})

export default styles;