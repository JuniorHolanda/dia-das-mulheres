'use client'

interface ActiveProps {
    $isactive?: boolean;
}

import { theme } from "@/styles/theme";
import styled from "styled-components"

export const Sgallery = styled.div`
    display: flex;
    align-items: center;
    gap: ${({theme}) => theme.spacing.md};
    width: 50%;
    height: 100%;

    @media (max-width: ${({theme}) => theme.breakpoints.desktop}) {
        flex-direction: column;
        gap: ${({theme}) => theme.spacing.sm};
        width: 70%;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        width: 100%;
    }
`

export const ScontainerImgMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100%;
    overflow: hidden;
    border: solid ${({theme}) => theme.colors.medium1};
    border-radius: ${({theme}) => theme.spacing.sm};

    @media (max-width: ${({theme}) => theme.breakpoints.desktop}) {
        width: 100%;
    }

    img{
        object-fit: cover;
        object-position: center;
        width: 100%;
    }
`

export const ScontainerSecondImg = styled.div<ActiveProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20%;
    height: 100%;
    gap: ${({theme}) => theme.spacing.md};
    
    @media (max-width: ${({theme}) => theme.breakpoints.desktop}) {
        flex-direction: row;
        width: 100%;
        height: 20%;
        gap: ${({theme}) => theme.spacing.sm};

    }
`

 export const SimgGallery = styled.div<ActiveProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 100%;
    width: 100%;
    border: solid ${(props) => (props.$isactive ? theme.colors.medium1 : theme.colors.medium2)};
    border-radius: ${({theme}) => theme.spacing.sm};
    cursor: pointer;

        img{
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
        }
`