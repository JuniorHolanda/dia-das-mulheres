'use client'
import styled from "styled-components";
import Link from "next/link";

export const Sproduct = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.colors.background1};

    @media (max-width: ${({theme}) => theme.breakpoints.desktop}) {
        height: auto;
    }
    `

export const Swrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 80%;
    background-color: ${({theme}) => theme.colors.background2};
    padding: ${({theme}) => theme.spacing.lg};
    gap: ${({theme}) => theme.spacing.md};
    
    @media (max-width: ${({theme}) => theme.breakpoints.desktop}) {
            width: 90%;
            flex-direction: column;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        width: 90%;
        padding: ${({theme}) => theme.spacing.md};

    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        width: 100%;
        padding: ${({theme}) => theme.spacing.sm};

    }
`

export const Scontent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:  ${({theme}) => theme.spacing.md};
    width: 50%;
    height: auto;

    @media (max-width: ${({theme}) => theme.breakpoints.desktop}) {
        width: 80%;
        flex-direction: column;
        padding: 0;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        width: 100%;
        flex-direction: column;
    }

    
    
    h1{
        font-size:  ${({theme}) => theme.fontSizes.titleLarge};
        color:  ${({theme}) => theme.colors.text};

        @media (max-width: ${({theme}) => theme.breakpoints.desktop}) {
            font-size:  ${({theme}) => theme.fontSizes.titleLarge};
            font-weight: 800;
            flex-direction: column;
        }
    }

        
    p{
        font-size:  ${({theme}) => theme.fontSizes.text};
        color:  ${({theme}) => theme.colors.text};

        @media (max-width: ${({theme}) => theme.breakpoints.desktop}) {
            font-size:  ${({theme}) => theme.fontSizes.textMedium};
        }

        @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
            font-size:  ${({theme}) => theme.fontSizes.textBig};
        }
    }
    
    div{
        display: flex;
        gap:  ${({theme}) => theme.spacing.sm};
        
        span{
            background-color:  ${({theme}) => theme.colors.medium2};
            padding: ${({theme}) => theme.spacing.sm};
            border-radius: ${({theme}) => theme.spacing.md};;
            color:  ${({theme}) => theme.colors.default2};
            font-weight: 600;
         }
    }
`

export const Slink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
    gap:  ${({theme}) => theme.spacing.sm};
    padding: ${({theme}) => theme.spacing.sm} ${({theme}) => theme.spacing.md} ;
    background-color: ${({theme}) => theme.colors.btn};
    border-radius: ${({theme}) => theme.spacing.md} ;
    font-size:  ${({theme}) => theme.fontSizes.textMedium};
    font-weight: 800;
    color:  ${({theme}) => theme.colors.default2};

    @media (max-width: ${({theme}) => theme.breakpoints.desktop}) {
        font-size:  ${({theme}) => theme.fontSizes.textMedium};
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        width: 50%;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        width: 100%;
        font-size:  ${({theme}) => theme.fontSizes.textBig};

    }

`