import { forwardRef } from 'react'
import * as S from './styles'

import trofeuIcon from '../../assets/icons/trofeuIcon.png'
import calendarioIcon from '../../assets/icons/calendarIcon.png'
import localizaIcon from '../../assets/icons/localizacaoIcon.png'

import marketing from '../../assets/images/marketing.svg'

const Sorteio = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <S.StylesSorteio ref={ref}>
      <S.Title>
        <h1>O que é o ano digital B7?</h1>
        <p>Uma oportunidade única para transformar sua empresa.</p>
      </S.Title>
      <S.Container>
        <div className="column text">
          <p>
            O <strong>Ano Digital B7</strong> é uma campanha exclusiva da Branding7 para empresários
            de Vitória da Conquista que desejam revolucionar seus negócios através do marketing
            digital.
          </p>
          <p>
            O ganhador do sorteio receberá <strong>12 meses completos</strong> de serviços de
            agência digital, incluindo estratégia, criação de conteúdo, gestão de tráfego pago e
            muito mais — tudo isso <strong>totalmente gratuito!</strong>
          </p>
          <S.Premio>
            <li className="item">
              <img src={trofeuIcon} alt="Ícone de troféu" />1 Ganhador Sortudo
            </li>
            <li className="item">
              <img src={calendarioIcon} alt="Ícone de troféu" />
              12 Meses de Serviço
            </li>
            <li className="item">
              <img src={localizaIcon} alt="Ícone de troféu" />
              Exclusivo para Vitória da Conquista
            </li>
          </S.Premio>
        </div>
        <div className="column">
          <img className="image" src={marketing} alt="Acessória de marketing" />
        </div>
      </S.Container>
    </S.StylesSorteio>
  )
})

export default Sorteio
