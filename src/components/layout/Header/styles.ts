import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const StylesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 80px;
  width: 100%;
  padding: 0px ${theme.spaces.paddingMobile};
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  backdrop-filter: saturate(180%) blur(8px);

  @media (min-width: 601px) {
    padding: 0px ${theme.spaces.paddingDesktop};
  }
`

export const Logo = styled.div`
  img {
    width: 140px;
  }
`

export const NavBar = styled.div`
  display: none;

  a {
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;
    color: white;
    transition: 0.2s ease-in;

    &:hover {
      background: linear-gradient(to right, #008dfd, #e91fe9);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }

  @media (min-width: 769px) {
    display: flex;
    gap: 48px;
  }
`
