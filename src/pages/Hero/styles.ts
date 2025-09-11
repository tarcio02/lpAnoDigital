import styled, { keyframes } from 'styled-components'
import hero from '../../assets/images/hero-compressed.webp'

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

export const StylesHero = styled.div``

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url(${hero});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  width: 100%;
  height: 100vh;

  &::after {
    position: absolute;
    content: '';
    inset: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }
`

export const Container = styled.div`
  margin-top: 70px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  width: 90%;
  z-index: 2;

  @media (min-width: 601px) {
    width: 592px;
    gap: 24px;
  }

  @media (min-width: 769px) {
    width: 800px;
    gap: 32px;
  }
`

export const Titulo = styled.h1`
  color: white;
  font-weight: bold;
  line-height: 60px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-size: 48px;

  .gradiente {
    background: linear-gradient(to right, #008dfd, #e91fe9, #ea1fe9);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: bold;
  }

  @media (min-width: 601px) {
    font-size: 56px;
  }

  @media (min-width: 769px) {
  }
`

export const Sub = styled.p`
  font-size: 18px;
  line-height: 30px;

  @media (min-width: 601px) {
  }

  @media (min-width: 769px) {
  }
`

export const Cta = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 16px;
  margin: 8px 0;
  gap: 8px;
  font-size: 18px;
  font-weight: bold;
  background: linear-gradient(to right, #008dfd, #e91fe9, #ea1fe9);
  border: none;
  border-radius: 16px;
  color: white;
  cursor: pointer;
  box-shadow:
    0 0 8px rgba(233, 31, 233, 0.6),
    0 0 16px rgba(0, 141, 253, 0.5);
  transition: 0.3s ease-in-out;
  animation: ${pulse} 2s infinite;

  &:hover {
    box-shadow:
      0 0 12px rgba(233, 31, 233, 0.8),
      0 0 24px rgba(0, 141, 253, 0.7),
      0 0 32px rgba(233, 31, 233, 0.6);
    transform: scale(1.05);
  }

  img {
    width: 20px;
  }

  @media (min-width: 601px) {
    width: 400px;
    padding: 16px 32px;
  }

  @media (min-width: 769px) {
  }
`

export const Gatilho = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4px;
  padding: 6px 20px;
  border-radius: 20px;
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 0.2);

  font-size: 16px;

  img {
    width: 32px;
  }

  @media (min-width: 601px) {
    flex-direction: row;

    img {
      width: 18px;
    }
  }

  @media (min-width: 769px) {
  }
`
