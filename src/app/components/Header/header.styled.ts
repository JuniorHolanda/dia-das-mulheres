'use client';
import Link from 'next/link';
import styled from 'styled-components';

export const Swrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20%;
  padding: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.xs};
  background-image: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.medium1} 10%,
    ${({ theme }) => theme.colors.medium2} 100%
  );
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 90%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }

  img {
    width: 10vw;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      width: 12vw;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 18vw;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: 50vw;
    }
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.textBig};
    letter-spacing: ${({ theme }) => theme.spacing.xs};
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.default2};
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: ${({ theme }) => theme.fontSizes.textBig};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: ${({ theme }) => theme.fontSizes.textBig};
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: ${({ theme }) => theme.fontSizes.textMedium};
    text-align: center;
    letter-spacing: ${({theme}) => theme.spacing.xs};
    font-style: italic;
    width: 50%;
    color: ${({ theme }) => theme.colors.default2};

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: ${({ theme }) => theme.fontSizes.titleLarge};
      width: 100%;
    }
  }
`;
export const Slink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.text};
  color: ${({ theme }) => theme.colors.background1};
  font-weight: 800;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes.textBig};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.textBig};
  }
`;
