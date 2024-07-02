import React from 'react';
import styled from "styled-components/native";
import colors from '../Theme/colors';
import { useFonts } from "expo-font";
import Form from "./Form";
import Divisao from "./Divisao";
import { Text, View } from "react-native";
import RedesSociais from "./RedesSociais";
import { useNavigation } from "@react-navigation/native";
import TituloFormulario from "../../components/TituloFormulario";
import { Button } from 'react-native-paper';

export const ContainerFazerCadastro = styled.View`
    align-items: center;
    margin-top: 50px;
`

export const ContainerLogin = styled.View`
    flex: 1;
    padding: 50px 10px;
    justify-content: center;
    background-color: ${colors.white};
`
    
export const TituloLogin = styled.Text`
    color:  ${colors.primary};
    font-size: 40px;
    font-family: 'GilroyBold';
`

function LoginView(){

    const [loaded]  = useFonts({
        GilroyBold: require('../Fonts/Gilroy-Bold.ttf'),
    });
    
    if(!loaded){
        return null;
    }

    const navigation = useNavigation();

    const goToNextCadastroView = () => {
        navigation.navigate('Cadastro');
    };

    return (
        <ContainerLogin>
            <View>
                <View>
                    <TituloLogin>Seja</TituloLogin>
                    <TituloLogin>Bem-vindo(a)</TituloLogin>
                </View>
                <Form />
            </View>
            <Divisao />
            <View>
                <RedesSociais />
            </View>

            <ContainerFazerCadastro>
                <Button
                 onPress={goToNextCadastroView}
                >
                    <Text>
                        <TituloFormulario name="Não tenho uma conta" />
                    </Text>
                </Button>
            </ContainerFazerCadastro>

        </ContainerLogin>
    )
}

export default LoginView;