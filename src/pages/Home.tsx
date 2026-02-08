import { useRef, useState } from 'react'
import Header from '../components/layout/Header'
import MenuLateral from '../components/layout/MenuLateral'
import type { SectionRefs } from '../App'
import Hero from './Hero'
import Sorteio from './Sorteio'
import Metodo from './Metodo'
import Footer from '../components/layout/Footer/Index'
import Formulario from './Formulario'
import Premio from './Premio'
import Regras from './Regras'
import Tutorial from './Tutorial'

const Home = () => {
  const [menuAberto, setMenuAberto] = useState(false)
  const refs = useRef<SectionRefs>({
    sorteio: null,
    metodo: null,
    premio: null,
    participar: null,
  })

  const menuToggle = () => {
    setMenuAberto((prev) => !prev)
  }

  return (
    <>
      <Header refs={refs} menuAberto={menuAberto} toggleMenu={menuToggle} />
      <MenuLateral refs={refs} aberto={menuAberto} fechar={menuToggle} />
      <Hero refs={refs} />
      <Sorteio ref={(el) => void (refs.current.sorteio = el)} />
      <Metodo ref={(el) => void (refs.current.metodo = el)} />
      <Premio ref={(el) => void (refs.current.premio = el)} />
      <Regras />
      <Tutorial />
      <Formulario ref={(el) => void (refs.current.participar = el)} />
      <Footer />
    </>
  )
}

export default Home
