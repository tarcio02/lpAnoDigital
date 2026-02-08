import * as S from './styles'

import logo from '../../../assets/images/logo.png'
import carta from '../../../assets/icons/cartaIcon.png'
import telefone from '../../..//assets/icons/telefoneIcon.png'
import localizacao from '../../../assets/icons/ponteiroIcon.png'
import linkedin from '../../../assets/icons/linkedinIcon.png'
import whatsapp from '../../../assets/icons/whatsappIcon.png'
import instagram from '../../../assets/icons/instagramicon.png'

const Footer = () => {
  return (
    <S.StylesFooter>
      <S.Container>
        <S.Logo>
          {' '}
          <img src={logo} alt="Logo Branding7" />
        </S.Logo>
        <S.Contato>
          <p>Transformando empresas através do marketing digital</p>
          <div className="contato">
            <img src={carta} alt="Ìcone de carta" />
            <a href="mailto:comercial@branding7.com.br" target="_blank">
              contato@branding7.com.br
            </a>
          </div>
          <div className="contato">
            <img src={telefone} alt="Ìcone de carta" />
            <a href="https://wa.me/557781223827" target="_blank">
              (77) 98122-3827
            </a>
          </div>
          <div className="contato">
            <img src={localizacao} alt="Ìcone de carta" />
            <a href="https://maps.app.goo.gl/bvsPTgfYHFiAymWL9" target="_blank">
              Vitória da Conquista - BA
            </a>
          </div>
        </S.Contato>
        <S.Sociais>
          <p>Siga-nos</p>
          <div className="icons">
            <a href="https://www.instagram.com/b7.agencia/" target="_blank" className="icon">
              <img src={instagram} alt="Ìcone de Instagram" />
            </a>
            <a href="https://wa.me/557781223827" target="_blank" className="icon">
              <img src={whatsapp} alt="Ìcone de watsapp" />
            </a>
            <a
              href="https://www.linkedin.com/in/branding7-ag%C3%AAncia-6ab622360/"
              target="_blank"
              className="icon"
            >
              <img src={linkedin} alt="Ìcone de linkedin" />
            </a>
          </div>
        </S.Sociais>
      </S.Container>
      <S.Copy>
        <p>&copy; 2025 Branding7 - Todos os direitos reservados.</p>
      </S.Copy>
    </S.StylesFooter>
  )
}

export default Footer
