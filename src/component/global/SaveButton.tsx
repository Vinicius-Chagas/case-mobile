import { StandardContainer, StandardButton } from "../../styles/global";
import { ButtonText } from "../header/style";

interface saveButtonProps {
    onSubmit: () => void;
}

export default function SaveButton({ onSubmit }: saveButtonProps) {
    return (
        <StandardContainer style={{ marginTop: 10 }}>
            <StandardButton onPress={onSubmit}>
                <ButtonText>Salvar</ButtonText>
            </StandardButton>
        </StandardContainer>
    )
}