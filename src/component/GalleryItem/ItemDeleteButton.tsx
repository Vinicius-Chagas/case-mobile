import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import Delete from "../../Services/Delete.service";


export function ItemDeleteButton({ id }: { id: number }) {

    return (

        <Button name="trash" size={25} color="red" onPress={(e) => Delete(id, 'product')} />

    )

}

const Button = styled(Feather)`
    width: 30px;
    height: 30px;
  
`;