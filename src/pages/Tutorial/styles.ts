import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const StylesTutorial = styled.div`
  color: #2c3e50;
  padding: ${theme.spaces.paddingMobile};

  @media (min-width: 601px) {
    padding: ${theme.spaces.paddingDesktop};
  }
`

export const Title = styled.div`
  text-align: center;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 20px;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 40px;
  margin-top: 40px;
  width: 76;

  @media (min-width: 601px) {
    flex-direction: row;
  }
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;

  .icone {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: #2980b9;
    font-size: 24px;
    color: white;
  }

  h3 {
    font-size: 20px;
  }

  p {
    font-size: 16px;
  }

  @media (min-width: 601px) {
    height: 240px;
  }
`
