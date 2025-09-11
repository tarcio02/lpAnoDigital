import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const StylesFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${theme.spaces.paddingMobile};
  background: rgb(44, 62, 80);

  @media (min-width: 601px) {
    padding: ${theme.spaces.paddingDesktop};
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 24px;

  @media (min-width: 601px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
    margin-bottom: 40px;
  }
`

export const Copy = styled.div`
  gap: 24px;
  text-align: center;
  border-top: 1px solid gray;
  padding-top: 24px;

  p {
    font-size: 16px;
  }

  @media (min-width: 601px) {
    padding-top: 40px;
  }
`

export const Logo = styled.div`
  margin-top: 12px;
  img {
    width: 140px;
  }
`
export const Contato = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 16px;

  .contato {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    a {
      color: white;
      font-size: 16px;
      text-decoration: none;
    }

    img {
      width: 16px;
    }
  }

  @media (min-width: 601px) {
    width: 400px;
  }
`

export const Sociais = styled.div`
  margin-bottom: 24px;
  p {
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: 16px;
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);

      img {
        width: 16px;
      }
    }
  }
`
