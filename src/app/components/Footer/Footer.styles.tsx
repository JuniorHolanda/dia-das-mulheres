"use client";

import styled from "styled-components";

export const Sfooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.medium1};
  width: 100%;
  /* height: 40vh; */
`;

export const Scontent = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg};
  align-items: flex-start;
  width: 100%;
  height: 90%;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: ${({ theme }) => theme.spacing.md};
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md};
    width: 100%;
    flex-direction: column;
  }
`;

export const Scontainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  height: 100%;
  flex: 1;

  h3 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.fontSizes.titleSmall};
    color: ${({ theme }) => theme.colors.text};
    height: fit-content;

    font-family: ${({ theme }) => theme.fonts.text};
    font-size: ${({ theme }) => theme.fontSizes.titleMedium};
  }

  p {
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.textMedium};
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    li {
      display: flex;
      align-items: center;
      min-height: 50px;
      gap: ${({ theme }) => theme.spacing.xs};
      font-family: ${({ theme }) => theme.fonts.text};
      font-size: ${({ theme }) => theme.fontSizes.text};
      color: ${({ theme }) => theme.colors.text};

      @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-family: ${({ theme }) => theme.fonts.text};
        font-size: ${({ theme }) => theme.fontSizes.textBig};
        min-height: 30px;
      }

      a {
        display: flex;
        gap: ${({ theme }) => theme.spacing.sm};
        justify-content: center;
        align-items: center;
        font-size: ${({ theme }) => theme.fontSizes.textMedium};

        span {
          display: flex;
          justify-content: center;
          align-items: center;
          color: ${({ theme }) => theme.colors.medium2};
          font-size: ${({ theme }) => theme.fontSizes.textMedium};

          @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
            font-size: ${({ theme }) => theme.fontSizes.textBig};
          }
        }
      }
    }
  }
`;

export const Sform = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  height: 100%;
  flex: 1;

  div {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
  }

  label {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: ${({ theme }) => theme.spacing.sm};
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: ${({ theme }) => theme.fontSizes.textMedium};
    color: ${({ theme }) => theme.colors.text};

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: ${({ theme }) => theme.fontSizes.textBig};
      width: 100%;
    }

    input {
      font-size: ${({ theme }) => theme.fontSizes.text};
      font-weight: 300;
      padding: ${({ theme }) => theme.spacing.sm};
      border-radius: ${({ theme }) => theme.spacing.md};
      border: solid 1px ${({ theme }) => theme.colors.default2};
      color: ${({ theme }) => theme.colors.medium2};
      min-height: 50px;

      &:focus {
        outline: none;
        border: solid 1px ${({ theme }) => theme.colors.btnActive};
      }

      &::placeholder {
        color: ${({ theme }) => theme.colors.default3};

        @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
          font-size: ${({ theme }) => theme.fontSizes.textBig};
        }
      }
    }
  }

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
    font-size: ${({ theme }) => theme.fontSizes.text};
    font-weight: 300;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.default2};
    background-color: ${({ theme }) => theme.colors.btn};
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      width: 100%;
      height: 100%;
      font-size: ${({ theme }) => theme.fontSizes.textBig};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.btnHover};
    }
  }
`;

export const Ssignature = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  width: 100%;
  height: 10%;
  border-top: solid 2px ${({ theme }) => theme.colors.medium2};
  color: ${({ theme }) => theme.colors.medium2};

  address {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    width: 100%;
    height: 100%;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: ${({ theme }) => theme.fontSizes.text};
    font-weight: 300;
    flex-wrap: wrap;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: ${({ theme }) => theme.fontSizes.textBig};
      width: 50%;
    }

    a {
      font-weight: 600;
    }
  }
`;
