import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function EditItem() {

    const { id } = useLocalSearchParams();
    console.log(id)
    return (<Text>Teste</Text>)
}