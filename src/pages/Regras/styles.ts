import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const StylesRegras = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2c3e50;
  padding: ${theme.spaces.paddingMobile};

  @media (min-width: 769px) {
    padding: ${theme.spaces.paddingDesktop};
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  width: 100%;

  @media (min-width: 769px) {
    width: 769px;
  }
`

export const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  @media (min-width: 769px) {
    font-size: 40px;
  }
`
export const Lista = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 24px;
  width: 92%;

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    gap: 16px;
    font-weight: bold;

    img {
      width: 20px;
    }
  }
`

export const Paragrafo = styled.p`
  font-size: 16px;
  line-height: 40px;
  text-align: center;
`
