import * as yup from 'yup'

export const productSchema  = yup.object().shape({
    id: yup.number().nullable().notRequired(),
    nome: yup.string().required("Nome do produto é obrigatório"),
    valor: yup.number().required("Valor do produto é obrigatório"),
    descricao: yup.string().required("Quantidade do produto é obrigatório"),
    image: yup.mixed()
})

export const loginSchema = yup.object().shape({
    email: yup.string().email("Email incorreto").required("Este campo é obrigatorio"),
    password: yup.string().required("Este campo é obrigatorio")
})

export const estoqueSchema = yup.object().shape({
    ID: yup.number().required("É necessário escolher um dos produtos disponíveis.").nullable(),
    adition: yup.number().required("É necessário definir uma quantidade").nullable()
})

export type loginResponse = {
    token: string;
}