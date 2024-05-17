import { Link, router } from "expo-router";
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';




export function ItemEditButton({ id }: { id: number }) {

    return (

        <Button name="edit-2" size={25} color="black" onPress={(e) => router.push(`/product?ID=${id}`)} />

    )

}

const Button = styled(Feather)`
    width: 30px;
    height: 30px;
    
`;