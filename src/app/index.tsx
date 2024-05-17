import { useForm } from 'react-hook-form';
import styled from 'styled-components/native'
import { router } from 'expo-router';
import { yupResolver } from '@hookform/resolvers/yup';
import { Text } from 'react-native';
import { BodyContainer, StandardContainer, InputLabel, StandardButton, StandardInput, StandardLink } from '../styles/global'
import Post from '../Services/Post.service'
import { loginResponse, loginSchema } from '../types/schemas';
import { loginData } from '../types/types';



export default function App() {

    const defaultValues: loginData = {
        email: "",
        password: ""
    }

    const {
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm<loginData>({ defaultValues, resolver: yupResolver(loginSchema) });

    const onSubmit = async (data: loginData) => {

        /* const res = await Post(data, 'login');

        const { token } = res as unknown as loginResponse;
 */

        router.push('/home')

    };


    return (

        <BodyContainer>
            <StandardContainer>

                <StyledText>Bem vindo.</StyledText>

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
                    <StandardButton onPress={handleSubmit(onSubmit)}>
                        <ButtonText >Log in</ButtonText>
                    </StandardButton>
                </StandardContainer>

                <StandardContainer style={{ marginTop: 10 }}>
                    <StandardLink onPress={(e) => router.push("/register")} >Não tem uma conta? Crie uma!</StandardLink>
                </StandardContainer>

            </StandardContainer>
        </BodyContainer>

    );
}


const StyledText = styled.Text`
    margin-bottom: 12px;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
`;

const ButtonText = styled(InputLabel)`
    color:white;
`;



