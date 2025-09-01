import * as S from './styles'

import logo from '../../../assets/images/logo.png'

const Header = () => {
  return (
    <S.StylesHeader>
      <S.Logo>
        <img src={logo} alt="Logo B7" />
      </S.Logo>
      <S.NavBar>
        <a href="#">Sorteio</a>
        <a href="#">Método B7-3X</a>
        <a href="#">Prêmio</a>
        <a href="#">Participar</a>
      </S.NavBar>
    </S.StylesHeader>
  )
}

export default Header
