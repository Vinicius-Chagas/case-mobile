import { StandardContainer, InputLabel, StandardInput } from "../../styles/global";

interface inputProps {
    title: string;
    defaultValue: string;
    onChangeText: (text: string) => void;
}

export default function ProductInput({ title, defaultValue, onChangeText }: inputProps) {
    return (
        <StandardContainer style={{ marginTop: 10 }}>
            <InputLabel>{title}</InputLabel>
            <StandardInput value={defaultValue} onChangeText={onChangeText}></StandardInput>
        </StandardContainer>
    )
}