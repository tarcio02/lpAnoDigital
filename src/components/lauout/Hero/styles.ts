import styled, { keyframes } from "styled-components";
import hero from "../../../assets/images/hero-compressed.webp"

const pulse = keyframes`
    0%, 100% {
        box-shadow: 0 0 8px rgba(233, 31, 233, 0.6), 
        0 0 16px rgba(0, 141, 253, 0.5);
    }
    50% {
        box-shadow: 0 0 16px rgba(233, 31, 233, 0.9), 
        0 0 32px rgba(0, 141, 253, 0.8);
    }
`

export const StylesHero = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
    margin-top: 70px;
`

export const HeroContainer = styled.div`
    position: relative;
    background-image: url(${hero});
    background-size: cover;
    background-position: center;
    overflow: hidden;
    width: 100%;
    height: calc(100vh - 70px);

    &::after{
    position: absolute;
    content: "";
    inset: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
    }
`

export const Container = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 16px;
    width: 90%;
    z-index: 2;


    @media (min-width: 601px){
        width: 592px;
        gap: 24px;
    } 

    @media (min-width: 769px){
        width: 800px;
        gap: 32px;
    }
`

export const Titulo =styled.h1`
    color: white;
    font-size: 56px;

    span{

    }

    @media (min-width: 601px){
    
    }

    @media (min-width: 769px){
    
    }
`

export const Sub = styled.p`

@media (min-width: 601px){
    
    }

    @media (min-width: 769px){
    
    }
` 

export const Cta = styled.button`
    display: flex;
    align-items: center;
    text-align: center;
    gap: 8px;
    width: 400px;
    padding: 16px 32px;
    font-size: 18px;
    font-weight: bold;
    background: linear-gradient(to right,  #008DFD,  #E91FE9, #EA1FE9);
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    box-shadow: 0 0 8px rgba(233, 31, 233, 0.6), 
                0 0 16px rgba(0, 141, 253, 0.5);
    transition: 0.3s ease-in-out;
    animation:${pulse} 2s infinite;

    &:hover{
        box-shadow: 0 0 12px rgba(233, 31, 233, 0.8), 
        0 0 24px rgba(0, 141, 253, 0.7), 
        0 0 32px rgba(233, 31, 233, 0.6);
        transform: scale(1.05);
    }

    img{
        width: 18px;
    }

@media (min-width: 601px){
    
    }

    @media (min-width: 769px){
    
    }
`

export const Gatilho = styled.p`
@media (min-width: 601px){
    
    }

    @media (min-width: 769px){
    
    }
`