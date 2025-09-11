import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const StylesSorteio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #333333;
  padding: ${theme.spaces.paddingMobile};

  @media (min-width: 601px) {
    padding: ${theme.spaces.paddingDesktop};
  }
`

export const Title = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-size: 40px;
    margin-bottom: 16px;
  }

  p {
    font-size: 20px;
    color: #333333;
  }
  @media (min-width: 601px) {
    margin-bottom: 60px;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 18px;

  .column {
    width: 100%;
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    text-align: start;
    gap: 24px;
  }

  .image {
    width: 100%;
    margin-top: 50px;
  }

  @media (min-width: 601px) {
    gap: 32px;
    flex-direction: row;
    .column {
      width: 50%;
    }
  }
`
export const Premio = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: start;
  list-style: none;
  margin-top: 8px;

  .item {
    font-size: 16px;

    img {
      width: 16px;
      margin-right: 8px;
    }
  }
`
