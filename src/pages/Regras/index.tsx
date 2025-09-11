import * as S from './styles'

import check from '../../assets/icons/checkIcon.png'

const Regras = () => {
  return (
    <S.StylesRegras>
      <S.Container>
        <S.Title>Quem pode participar?</S.Title>
        <S.Lista>
          <li className="item">
            <img src={check} alt="Icone check" />
            Donos de empresas em Vitória da Conquista
          </li>
          <li className="item">
            <img src={check} alt="Icone check" />
            Empresas de qualquer porte ou segmento
          </li>
          <li className="item">
            <img src={check} alt="Icone check" />
            Interesse em crescer através do marketing digital
          </li>
        </S.Lista>
        <S.Paragrafo>
          Esta campanha é exclusiva para empresários de Vitória da Conquista que desejam
          revolucionar seus negócios e fazer parte da transformação digital da região.
        </S.Paragrafo>
      </S.Container>
    </S.StylesRegras>
  )
}

export default Regras
