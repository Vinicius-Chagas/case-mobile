import styled from "styled-components/native";
import { data } from "../../types/types";

interface GalleryBodyProps {
    data: data
}


export function ItemBody({ data }: GalleryBodyProps) {

    return (
        <>
            <Div>
                <P>{data.nome}</P>
            </Div>
            <Div>
                <P>{data.total}</P>
            </Div>
            <Div>
                <P>{data.valor}</P>
            </Div>
        </>
    )

}

const Div = styled.View`

    width: 20%;
    min-height: 100%;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2px;       

`;

const P = styled.Text`

    color: gray;
    font-size: 16px;

`;