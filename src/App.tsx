import { useState, useRef } from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import Header from './components/layout/Header'
import MenuLateral from './components/layout/MenuLateral'
import Hero from './pages/Hero'
import Sorteio from './pages/Sorteio'
import Metodo from './pages/Metodo'
import Premio from './pages/Premio'
import Regras from './pages/Regras'
import Tutorial from './pages/Tutorial'
import Formulario from './pages/Formulario'
import Footer from './components/layout/Footer/Index'

export type SectionRefs = {
  sorteio: HTMLDivElement | null
  metodo: HTMLDivElement | null
  premio: HTMLDivElement | null
  participar: HTMLDivElement | null
}

function App() {
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
      <GlobalStyles />
      <Header refs={refs} menuAberto={menuAberto} toggleMenu={menuToggle} />
      <MenuLateral refs={refs} aberto={menuAberto} fechar={menuToggle} />
      <Hero />
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

export default App
