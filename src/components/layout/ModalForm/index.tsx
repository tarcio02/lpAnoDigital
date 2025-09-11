import { useEffect } from 'react'
import { Backdrop, ModalBox, Button, Title, Spinner } from './styles'

type PropsTypes = {
  show: boolean
  onClose: () => void
  erro: boolean
  loading: boolean
}

const ModalForm: React.FC<PropsTypes> = ({ show, onClose, erro, loading }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto' // garante o reset se desmontar
    }
  }, [show])

  if (!show) return null

  return (
    <Backdrop>
      <ModalBox>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Title>
              {erro
                ? 'Infelizmente houve um erro, tente novamente mais terde.'
                : 'Sua candidatura foi realizada com sucesso, aguarde o nosso email de confirmação'}
            </Title>
            <Button error={erro} onClick={onClose}>
              Fechar
            </Button>
          </>
        )}
      </ModalBox>
    </Backdrop>
  )
}

export default ModalForm
