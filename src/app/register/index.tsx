import styled from "styled-components/native";
import { Form, useForm } from 'react-hook-form';
import { object, string, ref } from "yup";
import { router } from "expo-router";
import { yupResolver } from '@hookform/resolvers/yup'
import { BodyContainer, StandardContainer, InputLabel, StandardInput, StandardButton, StandardLink } from '../../styles/global'
import { Text, View } from "react-native";
import Post from "../../Services/Post.service";

type registerData = {
    fullname: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const registerSchema = object({
    fullname: string().required("Este campo é obrigatorio"),
    email: string().email().required("Este campo é obrigatorio"),
    password: string().required("Este campo é obrigatorio"),
    confirmPassword: string().required("Este campo é obrigatorio").oneOf([ref('password')], "As senhas nao sao iguais")
})

export default function Register() {

    const defaultValues: registerData = {
        fullname: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const {
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm<registerData>({ defaultValues, resolver: yupResolver(registerSchema) });

    const onSubmit = async (data: registerData) => {

        const retorno: string | undefined = await Post(data, 'register');
    }

    return (

        <BodyContainer>
            <StandardContainer>

                <StandardContainer style={{ marginTop: 10 }}>
                    <InputLabel>Nome completo</InputLabel>
                    <StandardInput onChangeText={(text: string) => setValue("fullname", text)}></StandardInput>
                    {errors.fullname && <Text>{errors.fullname.message}</Text>}
                </StandardContainer>

                <StandardContainer style={{ marginTop: 10 }}>
                    <InputLabel>E-mail</InputLabel>
                    <StandardInput onChangeText={(text: string) => setValue("email", text)}></StandardInput>
                    {errors.email && <Text>{errors.email.message}</Text>}
                </StandardContainer>

                <StandardContainer style={{ marginTop: 10 }}>
                    <InputLabel>Senha</InputLabel>
                    <StandardInput onChangeText={(text: string) => setValue("password", text)}></StandardInput>
                    {errors.password && <Text>{errors.password.message}</Text>}
                </StandardContainer>

                <StandardContainer style={{ marginTop: 10 }}>
                    <InputLabel>Confirme sua senha</InputLabel>
                    <StandardInput onChangeText={(text: string) => setValue("confirmPassword", text)}></StandardInput>
                    {errors.confirmPassword && <Text>{errors.confirmPassword.message}</Text>}
                </StandardContainer>

                <StandardContainer style={{ marginTop: 10 }}>
                    <StandardButton onPress={handleSubmit(onSubmit)}>
                        <ButtonText>Register</ButtonText>
                    </StandardButton>
                </StandardContainer>

                <StandardContainer>
                    <StandardLink onPress={(e) => router.push("/")} >Não tem uma conta? Crie uma!</StandardLink>
                </StandardContainer>

            </StandardContainer>
        </BodyContainer>
    )
}

const ButtonText = styled(InputLabel)`
    color:white;
`;


