import styled from "styled-components/native";
import { Img } from "../../styles/global";

interface ItemImageProps {
    image: string
}

export function ItemImage({ image }: ItemImageProps) {

    return (
        <Div>
            <Img source={require('../../../assets/image1.jpg')} />
        </Div>
    )

}

const Div = styled.View`

    width: 20%;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;

`;



