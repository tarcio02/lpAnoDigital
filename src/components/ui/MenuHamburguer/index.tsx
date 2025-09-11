import { StylesMenuHamburguer } from './styles.ts'

type PropsTypes = {
  menuAberto: boolean
  toggleMenu: () => void
}

const MenuHamburguer = ({ menuAberto, toggleMenu }: PropsTypes) => {
  return (
    <StylesMenuHamburguer className="show" onClick={toggleMenu}>
      <div className={menuAberto ? 'linha ativa' : 'linha'}></div>
      <div className={menuAberto ? 'linha ativa' : 'linha'}></div>
      <div className={menuAberto ? 'linha ativa' : 'linha'}></div>
    </StylesMenuHamburguer>
  )
}
export default MenuHamburguer
