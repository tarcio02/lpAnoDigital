import { forwardRef } from 'react'
import * as S from './styles'

import cameraIcon from '../../assets/icons/cameraIcon.png'
import graficoIcon from '../../assets/icons/graficoIcon.png'
import cifraoIcon from '../../assets/icons/cifraoIcon.png'
import maosIcon from '../../assets/icons/iconParceria.png'

const Metodo = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <S.StylesMetodo ref={ref}>
      <S.Title>
        <h1>Conheça o Poder do Método B7-3X</h1>
        <p className="subTitulo">A metodologia que multiplica seus resultados por 3x</p>
        <p className="paragrafo">
          O Método B7-3X é nossa metodologia proprietária que combina estratégias comerciais
          digitais avançadas com foco em conteúdo em vídeo para acelerar o crescimento do seu
          negócio.
        </p>
      </S.Title>
      <S.Container>
        <S.Card>
          <div className="icon">
            <img src={cameraIcon} alt="" />
          </div>
          <h3>Video-First</h3>
          <p>Estratégia focada em conteúdo em vídeo para máximo engajamento e conversão.</p>
        </S.Card>
        <S.Card>
          <div className="icon">
            <img src={graficoIcon} alt="" />
          </div>
          <h3>3x Crescimento</h3>
          <p>Promessa de até 3x crescimento no faturamento ou engajamento em 6-12 meses.</p>
        </S.Card>
        <S.Card>
          <div className="icon">
            <img src={cifraoIcon} alt="" />
          </div>
          <h3>ROI Garantido</h3>
          <p>Foco em gerar ROI e ROAS com retorno 3x maior sobre o investimento.</p>
        </S.Card>
        <S.Card>
          <div className="icon">
            <img src={maosIcon} alt="" />
          </div>
          <h3>Sem Multa</h3>
          <p>Contrato flexível sem multa, apenas aviso prévio para total tranquilidade.</p>
        </S.Card>
      </S.Container>
    </S.StylesMetodo>
  )
})

export default Metodo
