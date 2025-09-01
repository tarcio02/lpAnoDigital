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
  background-color: white;
  @media (min-width: 601px){
      
      }
  
      @media (min-width: 769px){
      
      };

  @media (min-width: 601px) {
    padding: 0px ${theme.spaces.paddingDesktop};
  }
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  overflow: hidden;
  width: 140px;
  height: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const NavBar = styled.div`
  display: none;

  a {
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;
    color: #2c3e50;
    transition: 0.2ss ease-in;

    &:hover{
      color:#EA1FE9 ;
    }
  }

  @media (min-width: 769px) {
    display: flex;
    gap: 48px;
  }
`
