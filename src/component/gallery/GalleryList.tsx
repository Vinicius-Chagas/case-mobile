import { ReactElement } from "react"
import { ListRenderItem, View } from "react-native"
import styled from "styled-components/native"
import { data } from '../../types/types'
import { FlatList } from "react-native";
import { GalleryItemRoot } from "../GalleryItem/GalleryItemRoot";
import { Item } from '../GalleryItem'


interface GalleryListProps {
    DATA: Array<data>
}


const ListItem = ({ data }: { data: data }) => {
    return (
        <Item.Root>
            <Item.Image image={data.image} />
            <Item.Body data={data} />
            <Item.EditButton id={data.id} />
            <Item.DeleteButton id={data.id} />
        </Item.Root>
    )
}


export function GalleryList({ DATA }: GalleryListProps) {

    const renderItem: ListRenderItem<data> = ({ item }) => <ListItem data={item} />

    return (
        <List
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item: data) => item.id.toString()}
            onEndReached={() => console.log('End of the list')}

        />
    )
}

const List = styled(FlatList<data>)`
    padding: 0;
    margin: 0;

`;

