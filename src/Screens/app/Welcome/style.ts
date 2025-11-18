import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#ADD8E6'
    },
    top: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ADD8E6',
    },
    image: {
        width: 336,
        height: 336,
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        marginTop: 20,
    },
    bottom: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        borderRadius: 30,
        justifyContent: 'space-evenly',
    },
    buttonArea: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 20,
        height: 100,
    },
    text: {
        fontSize: 16,
        color: '#FFFFFF',
    },
    button: {
        backgroundColor: '#2C2C2C',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },    
});