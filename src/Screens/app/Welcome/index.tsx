import { View, Text, Image, Pressable } from "react-native";
import { style } from "./style";

export default function Welcome() {
  return (
    <View style={style.body}>
        <View style={style.top}>
            <Image
            style={style.image} 
            source={require("../../../assets/Logo_App.png")} 
            />

            <Text style={style.title}>
                Bem Vindo
            </Text>
        </View>
        <View style={style.bottom}>
            <View style={style.buttonArea}>
                <Text style={style.text}>
                    Já tem conta?
                </Text>
                <Pressable 
                style={style.button}
                onPress={() => console.log("entrando")}>
                    <Text style={style.text}>
                        Entrar
                    </Text>
                </Pressable>
            </View>
            <View style={style.buttonArea}>
                <Text style={style.text}>
                    Não tem conta?
                </Text>
                <Pressable 
                style={style.button}
                onPress={() => console.log('Cadastrar')}
                >
                    <Text style={style.text}>
                        Cadastre-se
                    </Text>
                </Pressable>
                <Text>teste</Text>
            </View>
        </View>
    </View>
  );
}