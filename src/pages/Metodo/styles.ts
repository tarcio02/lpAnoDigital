import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const StylesMetodo = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${theme.spaces.paddingMobile};
  background: linear-gradient(to right, #2c3e50, #34495e);
  @media (min-width: 601px) {
    padding: ${theme.spaces.paddingDesktop};
  }
`

export const Title = styled.div`
  text-align: center;
  h1 {
    text-align: center;
    font-size: 40px;
    line-height: 60px;
    letter-spacing: 1px;
  }

  .subTitulo {
    font-size: 20px;
    letter-spacing: 1px;
  }

  .paragrafo {
    font-size: 22px;
    letter-spacing: 1px;
    margin-top: 50px;
  }

  @media (min-width: 769px) {
    .subTitulo {
      font-size: 18px;
    }

    .paragrafo {
      font-size: 18px;
    }
  }
`

export const Container = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  margin-top: 50px;

  @media (min-width: 601px) {
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    width: auto;
    flex-wrap: wrap;
    gap: 24px;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 32px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  text-align: center;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 72px;
    width: 72px;
    border-radius: 50%;
    background: linear-gradient(to right, #008dfd, #e91fe9, #ea1fe9);

    img {
      width: 40px;
    }
  }

  h3 {
    font-size: 40px;
  }

  p {
    font-size: 18px;
    letter-spacing: 1px;
  }

  @media (min-width: 769px) {
    justify-content: space-between;
    height: 340px;
    width: 260px;
    gap: 0;

    .icon {
      height: 72px;
      width: 72px;

      img {
        width: 40px;
      }
    }
  }

  h3 {
    font-size: 24px;
  }

  p {
    font-size: 16px;
    letter-spacing: 1px;
  }
`
