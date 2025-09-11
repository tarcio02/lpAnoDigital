import type { SectionRefs } from '../../../App'
import { scrollRef } from '../../../utils/scrollRef'
import * as S from './styles'

type PropsTypes = {
  aberto: boolean
  fechar: () => void
  refs: React.RefObject<SectionRefs>
}

const MenuLateral = ({ aberto, refs, fechar }: PropsTypes) => {
  return (
    <S.Drawer $aberto={aberto}>
      <S.Lista>
        <li
          className="item"
          onClick={(e) => {
            scrollRef(e, refs.current.sorteio)
            fechar()
          }}
        >
          Sorteio
        </li>
        <li
          className="item"
          onClick={(e) => {
            scrollRef(e, refs.current.metodo)
            fechar()
          }}
        >
          Método B7-3X
        </li>
        <li
          className="item"
          onClick={(e) => {
            scrollRef(e, refs.current.premio)
            fechar()
          }}
        >
          Prêmio
        </li>
        <li
          className="item"
          onClick={(e) => {
            scrollRef(e, refs.current.participar)
            fechar()
          }}
        >
          Participar
        </li>
      </S.Lista>
    </S.Drawer>
  )
}

export default MenuLateral
