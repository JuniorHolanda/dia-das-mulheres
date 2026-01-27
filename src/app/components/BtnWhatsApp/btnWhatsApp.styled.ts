'use client';

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';

export const Slink = styled(Link)`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 100;

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  height: fit-content;

  border-radius: 300px;
  backdrop-filter: blur(8px);
  transition: all.3s ease-in-out;
  cursor: pointer;
  background-color: #cfcfcf3b;
  color: ${({ theme }) => theme.colors.medium2};
  padding: ${({theme}) => theme.spacing.sm};

  &:hover {
    background-color: #ffffff54;
    color: ${({ theme }) => theme.colors.btnHover};
    color: #3ba53bff;
  }
`;

export const Sbtn = styled(FaWhatsapp)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.titleLarge};
`;
