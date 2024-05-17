import { useCallback } from "react";
import { Gallery } from "../../component/gallery";
import Header from "../../component/header/Header";
import { data } from '../../types/types'
import GET from "../../Services/Get.service";
import { ButtonText, Column, HeaderButton, Row } from "../../component/header/style";
import { router } from "expo-router";
import { BodyContainer } from "../../styles/global";


const Data: Array<data> = [

]



export default function Home() {

    useCallback(async () => {
        const res = await GET('', '/products');
        const json = JSON.parse(res ?? '');
        const data: Array<data> = json;
        console.log(data)
    }, [])

    return (
        <BodyContainer>
            <Header title="Home" path="/" />
            <Gallery.Root>
                <Gallery.Header />
                <Gallery.List DATA={Data} />
            </Gallery.Root>
            <Column>
                <HeaderButton>
                    <ButtonText onPress={(e) => router.push('/product')}>Novo produto</ButtonText>
                </HeaderButton>

                <HeaderButton>
                    <ButtonText onPress={(e) => router.push('/estoque')}>Novo estoque</ButtonText>
                </HeaderButton>
            </Column>

        </BodyContainer>

    )
}

