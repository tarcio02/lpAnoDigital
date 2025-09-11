import styled from 'styled-components'

export const Drawer = styled.div<{ $aberto: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ $aberto }) => ($aberto ? 'translateX(0)' : 'translateX(100%)')};
  z-index: 1001;
`
export const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 24px;
  margin-top: 32px;

  .item {
    font-size: 20px;
    color: white;
    font-weight: bold;

    &:active {
      color: gray;
    }
  }
`

export const Button = styled.button`
  padding: 16px 32px;
`
