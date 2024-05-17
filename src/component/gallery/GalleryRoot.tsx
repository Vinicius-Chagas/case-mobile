import { ReactNode } from "react";
import styled from "styled-components/native";

interface GalleryRootProps {
    children: ReactNode
}
export function GalleryRoot({ children }: GalleryRootProps) {

    return (
        <Div>
            {children}
        </Div>
    )

}

const Div = styled.SafeAreaView`

    position: relative;
    height: 85%;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
    padding: 0;
    margin: 0;
    

`;
