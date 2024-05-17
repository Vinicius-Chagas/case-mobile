import { router } from "expo-router";
import { Label, DefaultContainer, HeaderButton, Row, ButtonText } from "./style";
import { AntDesign } from '@expo/vector-icons';



export default function Header({ title, path }: { title: string, path: string }) {

    return (
        <DefaultContainer>

            <Row>
                <AntDesign name="arrowleft" size={25} color="black" onPress={(e) => router.push(path)} />
            </Row>

            <Row style={{ flex: 1 }}>
                <Label>{title}</Label>
            </Row>

        </DefaultContainer>

    )
}