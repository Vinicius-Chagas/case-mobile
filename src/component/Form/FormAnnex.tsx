import React from "react";
import { StandardButton, StandardContainer } from "../../styles/global";
import { ButtonText } from "../header/style";
import styled from "styled-components";
import { Feather } from '@expo/vector-icons';
import pako from "pako";
import * as DocumentPicker from 'expo-document-picker'
import * as FileSystem from 'expo-file-system'
import { fileData } from "../../types/types";

interface annexButtonProps {
    onFileSelected: (fileData: fileData) => void;
}

export default function ({ onFileSelected }: annexButtonProps) {

    async function handleFileSelection() {
        const res = await DocumentPicker.getDocumentAsync({
            multiple: false,
            type: '*/*',
            copyToCacheDirectory: true,
        })
        if (!res.canceled) {
            res.assets.map(async (file) => {

                const { uri } = file;

                const fileInfo = await FileSystem.getInfoAsync(uri);
                if (fileInfo.exists) {
                    const fileContent = await FileSystem.readAsStringAsync(uri, {
                        encoding: FileSystem.EncodingType.Base64,
                    });

                    const compressedFile = pako.deflate(fileContent);
                    if (fileContent && compressedFile) {
                        onFileSelected({ fileContent, compressedFile })
                    }
                }
            })
        }
    }

    return (
        <StandardContainer style={{ marginTop: 10 }}>
            <AnnexButton onPress={handleFileSelection}>
                <ButtonText>Adicionar um anexo</ButtonText>
                <Feather name="paperclip" size={20}></Feather>
            </AnnexButton>
        </StandardContainer>
    )
}

const AnnexButton = styled(StandardButton)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 55px;
`;