import { JSX } from "react";
import { Slink, Swrapper } from "./header.styled";


interface Props {
    title: string;
    text?: string;
    link?: boolean;
}

export default function Header({ title, text, link }: Props): JSX.Element {
    return (
        <Swrapper>
            <img src="/logo-secundario-branco.png" alt="logo miriam momesso" />
            <h1>{title}</h1>
            <p>{text}</p>
            {
                link && <Slink href={'/'}>Voltar para o início</Slink>
            }
        </Swrapper>
    )
}