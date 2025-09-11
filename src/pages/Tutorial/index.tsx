import * as S from './styles'

const Tutorial = () => {
  return (
    <S.StylesTutorial>
      <S.Title>
        <h2>Como Participar?</h2>
        <p>Simples e rápido - apenas 3 passos</p>
      </S.Title>
      <S.Container>
        <S.Card>
          <div className="icone">1</div>
          <h3>Preencha o Formulário</h3>
          <p>Complete todas as informações solicitadas no formulário abaixo.</p>
        </S.Card>
        <S.Card>
          <div className="icone">2</div>
          <h3>Aguarde o Sorteio</h3>
          <p>O sorteio será realizado no dia 15 de setembro de 2025.</p>
        </S.Card>
        <S.Card>
          <div className="icone">3</div>
          <h3>Seja Notificado</h3>
          <p>O ganhador será contatado por telefone e e-mail.</p>
        </S.Card>
      </S.Container>
    </S.StylesTutorial>
  )
}

export default Tutorial
