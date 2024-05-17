import { yupResolver } from "@hookform/resolvers/yup";
import React, { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import Post from "../../Services/Post.service";
import Update from "../../Services/Update.service";
import { BodyContainer, StandardContainer } from "../../styles/global";
import { productSchema } from "../../types/schemas";
import { ProductData } from "../../types/types";


interface productProps {
    children: ReactNode
}

export default function ProductRoot({ children }: productProps) {



    return (

        <BodyContainer>
            <StandardContainer>

                {children}

            </StandardContainer>
        </BodyContainer>

    )
}


