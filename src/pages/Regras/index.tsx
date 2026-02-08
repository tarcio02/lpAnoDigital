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
            Somente empresas localizadas em Vitória da Conquista.
          </li>
          <li className="item">
            <img src={check} alt="Icone check" />
            Faturamento mínimo de R$ 50 mil/mês.
          </li>
          <li className="item">
            <img src={check} alt="Icone check" />
            Apenas uma inscrição por empresa.
          </li>
          <li className="item">
            <img src={check} alt="Icone check" />
            Não é válido para clientes e ex-clientes da Branding7.
          </li>
          <li className="item">
            <img src={check} alt="Icone check" />
            Tráfego pago é obrigatório — necessário para que as estratégias funcionem.*
          </li>
          <li className="item">
            <img src={check} alt="Icone check" />
            Treinamento e assessoria do CRM inclusos.**
          </li>
        </S.Lista>
        <S.Paragrafo>
          Esta campanha é exclusiva para empresários de Vitória da Conquista. <br />
          Inscrições incompletas serão desclassificadas. <br />
          *Verba de anúncios será custeada pela empresa ganhadora.
          <br />
          **O custo da plataforma de CRM e demais plugins e licenças de terceiros não estão
          inclusos.
        </S.Paragrafo>
      </S.Container>
    </S.StylesRegras>
  )
}

export default Regras
