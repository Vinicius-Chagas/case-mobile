import styled from "styled-components/native";

export function GalleryHeader() {
    return (
        <Div>
            <Column>
                <P>Imagem</P>
            </Column>
            <Column>
                <P>Produto</P>
            </Column>
            <Column>
                <P>Quantidade</P>
            </Column>
            <Column>
                <P>Preço</P>
            </Column>
            <Column>
                <P>Ações</P>
            </Column>
        </Div>
    )
}


const Div = styled.View`

    width: 95%;
    height: 6%;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;

    
`;

const Column = styled.View`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const P = styled.Text`
    font-size: 12px;

`;