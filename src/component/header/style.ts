
import styled from "styled-components/native";
import { InputLabel, StandardButton } from "../../styles/global";

export const DefaultContainer = styled.SafeAreaView`
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px;
    
`;

export const Row = styled.View`
    display: flex;
    align-items: center;
    min-width: 20px;
`;

export const Column = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: fit-content;
`;

export const HeaderButton = styled(StandardButton)`
    height: 50px;
    flex: 1;
    border-radius: 1px;
    border: 1px solid black;
`;

export const Label = styled(InputLabel)`
    font-size: 21px;
    font-weight: bold;
`;

export const ButtonText = styled(InputLabel)``;


