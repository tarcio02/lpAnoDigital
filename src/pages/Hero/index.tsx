import * as S from './styles'

import { scrollRef } from '../../utils/scrollRef'
import presenteIcon from '../../assets/icons/presenteIcon.png'
import relogioIcon from '../../assets/icons/relogioIcon.png'
import type { SectionRefs } from '../../App'

type PropsTypes = {
  refs: React.RefObject<SectionRefs>
}

const Hero = ({ refs }: PropsTypes) => {
  return (
    <S.StylesHero>
      <S.HeroContainer>
        <S.Container>
          <S.Titulo>
            Ganhe um <span className="gradiente">ano de agência grátis</span> com o Método B7-3X!
          </S.Titulo>
          <S.Sub>
            Sua empresa em Vitória da Conquista pode ser a próxima a revolucionar o marketing
            digital e multiplicar seus resultados por 3x.
          </S.Sub>
          <S.Cta onClick={(e) => scrollRef(e, refs.current.participar)}>
            <img src={presenteIcon} alt="Ìcone de presenet" />
            Participar do sorteio agora!
          </S.Cta>
          <S.Gatilho>
            <img src={relogioIcon} alt="Ícone de relogio" />
            Campanha por tempo limitado — não perca esta oportunidade única!{' '}
          </S.Gatilho>
        </S.Container>
      </S.HeroContainer>
    </S.StylesHero>
  )
}

export default Hero
