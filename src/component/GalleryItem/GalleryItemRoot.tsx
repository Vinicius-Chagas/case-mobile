import { ReactNode } from "react";
import styled from "styled-components/native";
import { Platform, View } from "react-native";

interface GalleryRootProps {
    children: ReactNode
}
export function GalleryItemRoot({ children }: GalleryRootProps) {

    return (
        <View style={{ overflow: "hidden", paddingBottom: 5 }}>
            <Div style={{ shadowColor: '#000', shadowOffset: { width: 1, height: 1 }, shadowOpacity: 0.5, shadowRadius: 10, elevation: 5 }}>
                {children}
            </Div>
        </View>
    )

}



const Div = styled.SafeAreaView`

    height: 80px;
    width: 96%;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
    padding: 0px;
    margin: 2px;
    border-radius: 5px;
    align-self: center;

`;
