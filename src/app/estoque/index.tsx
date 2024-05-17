import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { estoqueSchema, productSchema } from "../../types/schemas";
import { estoqueData } from "../../types/types";
import { Form } from "../../component/Form";
import { useState } from "react";
import Header from "../../component/header/Header";
import styled from "styled-components/native";
import { DUMMY_IMG } from "../../utils/constants";

const defaultValues: estoqueData = {
    ID: null,
    adition: null
}

function onSubmit() {

}

export default function Estoque() {

    const [previewContent, setPreviewContent] = useState(DUMMY_IMG);

    const [items, setItems] = useState([
        { label: 'Apple', value: '2' },
        { label: 'Banana', value: '1' }
    ]);

    const {
        setValue,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<estoqueData>({ defaultValues, resolver: yupResolver(estoqueSchema) });

    const { ID, adition } = watch();

    return (
        <Div style={{ flexDirection: 'column' }}>
            <Header title="Novo estoque" path="/home" />
            <Form.Root>

                <Form.Image
                    previewPath={previewContent}
                />
                <Form.SinglePicker
                    title="Item selecionado"
                    value={null}
                    items={items}
                    onChangeValue={(text: string | null) => setValue('ID', Number(text))}
                    onChangeItems={setItems}
                    allowAutoScroll={true}
                />
                <Form.SinglePicker
                    title="Operação"
                    value={null}
                    items={items}
                    onChangeValue={(text: string | null) => setValue('ID', Number(text))}
                    onChangeItems={setItems}
                    allowAutoScroll={true}
                />
                <Form.Input
                    title="Quantidade"
                    defaultValue=""
                    onChangeText={(text: string) => setValue('adition', Number(text))}
                />
                <Form.Save
                    onSubmit={handleSubmit(onSubmit)}
                />

            </Form.Root>
        </Div>
    )
}

const Div = styled.View`
    height: 100%;
    width: 100%;
`;