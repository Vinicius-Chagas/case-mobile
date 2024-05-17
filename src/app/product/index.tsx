import { ProductData, fileData } from "../../types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { productSchema } from "../../types/schemas";
import { useCallback, useState } from "react";
import Post from "../../Services/Post.service";
import { Form } from "../../component/Form";
import GET from "../../Services/Get.service";
import { useLocalSearchParams } from "expo-router";
import { DUMMY_IMG } from "../../utils/constants";
import styled from "styled-components/native";
import Header from "../../component/header/Header";

const defaultValues: ProductData = {
    nome: "",
    valor: 0,
    descricao: "",
    image: new Uint8Array()
};

export default function Product() {

    // -- state management
    const { ID } = useLocalSearchParams();

    const [previewContent, setPreviewContent] = useState(DUMMY_IMG);

    const {
        setValue,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<ProductData>({ defaultValues, resolver: yupResolver(productSchema) });

    const { nome, valor, descricao } = watch()
    const DATA = watch()


    // -- functions

    useCallback(async () => {
        if (ID) {
            const res = await GET(ID, 'product');
            console.log(res);
            const json = JSON.parse(res ?? '');
            const { id, nome, descricao, valor, imagem } = json

            setValue('id', id);
            setValue('nome', nome);
            setValue('descricao', descricao);
            setValue('valor', valor);
            setValue('image', imagem);
        }

    }, [ID])


    const handleFileSelected = useCallback((fileData: fileData) => {
        setPreviewContent(fileData.fileContent);
        setValue('image', fileData.compressedFile);
    }, [setValue, setPreviewContent])

    const handeValueChange = (text: string, field: keyof ProductData) => {
        const sanitizedText = text.replace(/[^0-9.,]/g, '');

        const sanitizedNumber = parseFloat(sanitizedText);

        if (!isNaN(sanitizedNumber)) {
            setValue(field, sanitizedNumber)
        }
    }

    const onSubmit = async () => {

        const res = await Post(DATA, '/product');

        console.log(res);
    }

    // -- render

    return (
        <Div style={{ flexDirection: 'column' }}>
            <Header title="Novo produto" path="/home" />
            <Form.Root>

                <Form.Image
                    previewPath={previewContent} />

                <Form.Input
                    title="Produto"
                    defaultValue={nome}
                    onChangeText={(text: string) => setValue('nome', text)} />

                <Form.Input
                    title="Descricao"
                    defaultValue={descricao}
                    onChangeText={(text: string) => handeValueChange(text, 'descricao')} />

                <Form.Input
                    title="Valor"
                    defaultValue={valor.toString()}
                    onChangeText={(text: string) => handeValueChange(text, 'valor')} />


                <Form.Annex
                    onFileSelected={handleFileSelected} />

                <Form.Save
                    onSubmit={handleSubmit(onSubmit)} />



            </Form.Root>
        </Div>
    )
}

const Div = styled.View`
    height: 100%;
    width: 100%;
`;
