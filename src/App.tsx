import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import Home from './pages/Home'
import FormBasico from './pages/FormBasico'

export type SectionRefs = {
  sorteio: HTMLDivElement | null
  metodo: HTMLDivElement | null
  premio: HTMLDivElement | null
  participar: HTMLDivElement | null
}

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/form" element={<FormBasico />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
