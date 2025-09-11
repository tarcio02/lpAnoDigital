import type { SectionRefs } from '../../../App'
import { scrollRef } from '../../../utils/scrollRef'
import * as S from './styles'
import MenuHamburguer from '../../ui/MenuHamburguer'
import logo from '../../../assets/images/logo.png'

type PropsTypes = {
  menuAberto: boolean
  toggleMenu: () => void
  refs: React.RefObject<SectionRefs>
}

const Header = ({ menuAberto, toggleMenu, refs }: PropsTypes) => {
  return (
    <>
      <S.StylesHeader>
        <S.Logo>
          <img src={logo} alt="Logo B7" />
        </S.Logo>
        <S.NavBar>
          <a href="#" onClick={(e) => scrollRef(e, refs.current.sorteio)}>
            Sorteio
          </a>
          <a href="#" onClick={(e) => scrollRef(e, refs.current.metodo)}>
            Método B7-3X
          </a>
          <a href="#" onClick={(e) => scrollRef(e, refs.current.premio)}>
            Prêmio
          </a>
          <a href="#" onClick={(e) => scrollRef(e, refs.current.participar)}>
            Participar
          </a>
        </S.NavBar>
      </S.StylesHeader>
      <MenuHamburguer menuAberto={menuAberto} toggleMenu={toggleMenu} />
    </>
  )
}

export default Header
