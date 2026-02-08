import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const StylesFormulario = styled.div`
  background: linear-gradient(to right, #2c3e50, #34495e);
  padding: ${theme.spaces.paddingMobile};

  @media (min-width: 601px) {
    padding: ${theme.spaces.paddingDesktop};
  }
`

export const Title = styled.div`
  color: white;
  text-align: center;

  h2 {
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 16px;
  }

  p {
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 1px;
  }
`

export const Form = styled.form`
  background: rgba(255, 255, 255, 0.1);
  padding: 16px;
  border-radius: 16px;
  width: 80%;
  max-width: 601px;
  margin: 48px auto;

  .column {
    width: 100%;
  }

  .input {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 8px;
    width: 100%;
    margin-bottom: 12px;

    label {
      font-size: 16px;
      color: white;
    }

    input {
      height: 40px;
      padding: 0 16px;
      width: 100%;
      border-radius: 8px;
      border: 2px solid rgba(255, 255, 255, 0.4);
      background: rgba(255, 255, 255, 0.2);
      outline: red;
      color: white;
      font-size: 16px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.3);
      }

      &:focus {
        border: 2px solid #008dfd;
      }
    }}

`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: white;
  gap: 8px;
  width: 100%;
  border-radius: 8px;
  height: 48px;
  border: none;
  background: linear-gradient(to right, #008dfd, #e91fe9, #ea1fe9);
  margin-top: 24px;
  cursor: pointer;

  img {
    width: 18px;
  }
`
