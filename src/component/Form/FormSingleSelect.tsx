import styled from "styled-components/native"
import DropDownPicker from "react-native-dropdown-picker";
import { useEffect, useState } from "react";
import { InputLabel, StandardContainer } from "../../styles/global";

interface SelectorProps {
    title: string;
    value: string | null;
    items: Array<{ label: string, value: string }>;
    onChangeValue: (value: string | null) => void;
    onChangeItems: (items: Array<{ label: string, value: string }>) => void;
    allowAutoScroll: boolean;
}

export default function FormSingleSelect({ value, items, onChangeValue, onChangeItems, allowAutoScroll, title }: SelectorProps) {
    const [open, setOpen] = useState(false);
    const [internalItems, setInternalItems] = useState(items);
    const [internalValue, setInternalValue] = useState(value);

    useEffect(() => {
        onChangeValue(internalValue);
        onChangeItems(internalItems);
    }, [internalValue, internalItems])

    return (
        <StandardContainer style={{ marginTop: 10 }}>
            <InputLabel>{title}</InputLabel>
            <Selector
                open={open}
                value={internalValue}
                items={internalItems}
                setOpen={setOpen}
                setValue={setInternalValue}
                setItems={setInternalItems}
                multiple={false}
                autoScroll={allowAutoScroll}

            />
        </StandardContainer>
    )
}

const Selector = styled(DropDownPicker)`
    z-index: 1;
`;