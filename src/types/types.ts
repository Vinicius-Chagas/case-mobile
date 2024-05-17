
export type data = {
    id: number;
    nome: string;
    total: number;
    valor: number;
    image: string;
}

export type ProductData = {
    id?: number | null | undefined;
    nome: string;
    valor: number;
    descricao: string;
    image?: Uint8Array;
}

export type fileData = { 
    fileContent: string;
    compressedFile: Uint8Array;
}

export type loginData = {
    email: string;
    password: string;
}

export type estoqueData = {
    ID: number | null;
    adition: number | null;
}