import styled from "styled-components/native";

export const BodyContainer = styled.View `
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    width:100vh;
    flex: 1;
    background-color: gray 50;
    padding: 5px 0    
`;

export const StandardContainer = styled.View `
    margin-bottom: 12px;
    width: 85%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-self: center;
    
`;


export const StyledText = styled.Text `
    margin-bottom: 12px;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
`;

export const InputLabel = styled.Text `

    margin-bottom: 1px;
`;

export const StandardInput = styled.TextInput `
    padding: 3px 2px;
    border: 1px solid gray;
    border-radius: 6px;
    box-shadow: -1px 1px 10px black;
`;

export const StandardButton = styled.TouchableOpacity`
  background: rgb(220 38 38);
  border-radius: 10px;
  align-items:center;
  justify-content:center;
  height: 50px;
`;

export const StandardLink = styled.Text`
    padding-top:5px;
    align-self: center;
`;

export const Img = styled.Image`
    height: 100%;
    width: 100%;
    align-self: center;
    border-radius: 10px;

`;


