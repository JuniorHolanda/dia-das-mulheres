'use client';
import styled from 'styled-components';

export const SswiperWrapper = styled.div`
  width: 100%;
  height: fit-content;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.spacing.md};
  .swiper-slide {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f5f5;
    width: 100%;
    height: fit-content;

    h1 {
      position: absolute;
      font-size: ${({ theme }) => theme.fontSizes.titleMedium};
      top: 30px;
      left: 60px;
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.text};
      font-weight: 800;
    }

    img {
      object-fit: contain;
      /* height: 100%; */
      width: 100%;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.colors.text};
  }

  .swiper-pagination-bullet {
    color: ${({ theme }) => theme.colors.text};
  }
`;
