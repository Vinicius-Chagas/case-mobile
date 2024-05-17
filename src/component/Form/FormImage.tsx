import React from "react";
import { Img } from "../../styles/global";
import styled from "styled-components/native";

interface imageProps {
    previewPath: string;
}

export default function ProductImage({ previewPath }: imageProps) {
    return (
        <ImgDiv style={{ marginTop: 10 }}>
            <Img src={`data:image/png;base64,${previewPath}`}></Img>
        </ImgDiv>
    )
}

const ImgDiv = styled.View`
    height: 260px;
    aspect-ratio: 1/1;
    align-self: center;
    border: 1px solid gray;
    border-radius: 10px;
`;
