import * as S from './styles'
import enviar from '../../assets/icons/enviarIcon.png'
import ModalForm from '../../components/layout/ModalForm'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string
const supabase = createClient(supabaseUrl, supabaseAnonKey)

type ModalState = {
  show: boolean
  loading: boolean
  erro: boolean
  msg?: string
}

const FormBasico = () => {
  const [form, setForm] = useState({
    nome: '',
    empresa: '',
    telefone: '',
  })

  const [modal, setModal] = useState<ModalState>({
    show: false,
    loading: false,
    erro: false,
    msg: '',
  })

  // const normalizePhone = (s: string) => s.replace(/[^\d()+\- ]+/g, '').trim()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const telOk = (t: string) => /^[0-9()+\- \s]{8,20}$/.test(t.trim())

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!form.nome.trim() || !form.empresa.trim() || !form.telefone.trim()) {
      setModal({
        show: true,
        loading: false,
        erro: true,
        msg: 'Preencha todos os campos obrigatórios.',
      })
      return
    }
    if (!telOk(form.telefone)) {
      setModal({ show: true, loading: false, erro: true, msg: 'Telefone em formato inválido.' })
      return
    }

    try {
      setModal({ show: true, loading: true, erro: false, msg: '' })

      const { error } = await supabase.from('recuperacao').insert({
        nome: form.nome.trim(),
        empresa: form.empresa.trim(),
        telefone: form.telefone.trim(),
      })

      if (error) throw new Error(error.message)

      setModal({
        show: true,
        loading: false,
        erro: false,
        msg: 'Enviado com sucesso! Em breve entraremos em contato.',
      })
      setForm({ nome: '', empresa: '', telefone: '' })
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Erro ao enviar. Tente novamente.'
      setModal({ show: true, loading: false, erro: true, msg })
    }
  }

  return (
    <S.StylesFormulario>
      <S.Title>
        <h2>Preencha e Concorra!</h2>
        <p>Sua empresa pode ser a próxima a ganhar um ano de agência grátis</p>
      </S.Title>

      <S.Form id="form" onSubmit={handleSubmit} noValidate>
        <div className="column">
          <div className="input">
            <label htmlFor="nome">Seu Nome*</label>
            <input
              id="nome"
              name="nome"
              type="text"
              value={form.nome}
              onChange={handleChange}
              required
              aria-invalid={modal.erro || undefined}
              data-error={modal.erro || undefined}
            />
          </div>

          <div className="input">
            <label htmlFor="empresa">Nome da Empresa*</label>
            <input
              id="empresa"
              name="empresa"
              type="text"
              value={form.empresa}
              onChange={handleChange}
              required
              aria-invalid={modal.erro || undefined}
              data-error={modal.erro || undefined}
            />
          </div>

          <div className="input">
            <label htmlFor="telefone">Telefone/WhatsApp*</label>
            <input
              id="telefone"
              name="telefone"
              type="tel"
              inputMode="tel"
              placeholder="(77) 99999-9999"
              value={form.telefone}
              onChange={handleChange}
              pattern="[0-9()+\\- \\s]{8,20}"
              title="Use dígitos e símbolos: () + - espaço"
              required
              aria-invalid={modal.erro || undefined}
              data-error={modal.erro || undefined}
            />
          </div>
        </div>

        <S.Button form="form" type="submit" disabled={modal.loading}>
          <img src={enviar} alt="Ícone de enviar" />
          {modal.loading ? 'Enviando...' : 'Enviar'}
        </S.Button>
      </S.Form>

      <ModalForm
        onClose={() => setModal({ show: false, erro: false, loading: false, msg: '' })}
        show={modal.show}
        erro={modal.erro}
        loading={modal.loading}
      />
    </S.StylesFormulario>
  )
}

export default FormBasico
