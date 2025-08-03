import React from "react";
import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const BannerWrapper = styled.div`
    background-color: #67D4FF;
    overflow: hidden;
    white-space: nowrap;
    padding: 15px 0;
`;

const SlidingContent = styled.div`
  display: inline-flex;
  animation: ${scroll} 14s linear infinite;
`;

const TextBlock = styled.div`
    padding-right: 45px; /* расстояние между повторениями */
    font-size: 26px;
    font-weight: 400;
    color: white;
    @media (max-width: 1200px) {
        font-size: 25px;
    }
    @media (max-width: 1024px) {
        font-size: 25px;
    }
    @media (max-width: 992px) {
        font-size: 25px;
    }
    @media (max-width: 768px) {
        font-size: 25px;
    }
    @media (max-width: 576px) {
        font-size: 25px;
    }
    @media (max-width: 450px) {
        font-size: 24px;
    }
    @media (max-width: 400px) {
        font-size: 23px;
    }
    @media (max-width: 375px) {
        font-size: 23px;
    }
    @media (max-width: 320px) {
        font-size: 22px;
    }
`;

const PromoBanner = () => {
    const text = "📢 Открыт приём на 2025/26 учебный год! Звоните: +996 773 366 869 .";

    return (
        <BannerWrapper>
            <SlidingContent>
                <TextBlock>{text}</TextBlock>
                <TextBlock>{text}</TextBlock>
                <TextBlock>{text}</TextBlock>
                <TextBlock>{text}</TextBlock>
                <TextBlock>{text}</TextBlock>
                <TextBlock>{text}</TextBlock>
                <TextBlock>{text}</TextBlock>
                <TextBlock>{text}</TextBlock>
                <TextBlock>{text}</TextBlock>
                <TextBlock>{text}</TextBlock>
            </SlidingContent>
        </BannerWrapper>
    );
};

export default PromoBanner;
