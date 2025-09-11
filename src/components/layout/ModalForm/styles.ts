import styled, { keyframes } from 'styled-components'

type StylesTypes = {
  error: boolean
  
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
from{
  opacity: 0;
  transform: scale(0.95);
}
to{
  opacity: 1;
  transform: scale(1);
}
`

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

export const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to right, #008dfd, #e91fe9, #ea1fe9);
  padding: 30px 25px;
  border-radius: 12px;
  text-align: center;
  width: 90%;
  max-width: 400px;
  min-height: 200px;
  animation: ${fadeIn} 0.2s ease-out;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
`

export const Title = styled.h3`
  letter-spacing: 1px;
  color: #fff;
`

export const Button = styled.button<StylesTypes>`
  background-color: ${({ error }) => (error ? '#d9534f' : '#28a745')};
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  font-weight: bold;
`
export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-top: 4px solid #008DFD;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin: auto;
`;