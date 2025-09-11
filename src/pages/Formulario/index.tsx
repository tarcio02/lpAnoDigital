import { useState, forwardRef } from 'react'
import * as S from './styles'

import enviar from '../../assets/icons/enviarIcon.png'
import ModalForm from '../../components/layout/ModalForm'

type FormData = {
  nomePessoa: string
  email: string
  telefone: string
  nomeEmpresa: string
  cnpj: string
  ramoSelecionado: string
  funcionarios: string
  fonte: string
  desafio: string
  termosAceitos: boolean
}

const isEmailValid = (email: string) => /\S+@\S+\.\S+/.test(email)

const Formulario = forwardRef<HTMLDivElement>((props, ref) => {
  const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL as string) || ''
  const SUPABASE_ANON = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || ''
  const EDGE_FN = import.meta.env.VITE_EDGE_FN || 'send-email'

  // evita // na URL se alguém colocar barra no .env
  const BASE_URL = SUPABASE_URL.replace(/\/+$/, '')
  const EDGE_URL = `${BASE_URL}/functions/v1/${EDGE_FN}`

  const [serverMsg, setServerMsg] = useState<string | null>(null)
  const [modal, setModal] = useState({
    show: false,
    loading: false,
    erro: true,
  })

  const showModal = (loading = true, erro = false) => {
    setModal({ show: true, loading, erro })
  }

  // alerta cedo se esquecer envs
  if (!SUPABASE_URL || !SUPABASE_ANON) {
    console.error('Faltam variáveis VITE_SUPABASE_URL e/ou VITE_SUPABASE_ANON_KEY')
  }

  const onlyDigits = (v: string) => v.replace(/\D/g, '')

  const formatPhoneBR = (v: string) => {
    // recebe apenas dígitos e devolve formatado
    const s = onlyDigits(v).slice(0, 11) // limita a 11 dígitos
    if (s.length <= 2) return `(${s}`
    if (s.length <= 7) return `(${s.slice(0, 2)}) ${s.slice(2)}`
    if (s.length <= 11) return `(${s.slice(0, 2)}) ${s.slice(2, 7)}-${s.slice(7)}`
    return v
  }

  const ramosAtuacao = [
    'Comércio',
    'Serviço',
    'Indústria',
    'Tecnologia',
    'Saúde',
    'Educação',
    'Alimentação',
    'Construção',
    'Consultoria',
    'Outro',
  ]

  const [formData, setFormData] = useState<FormData>({
    nomePessoa: '',
    email: '',
    telefone: '',
    nomeEmpresa: '',
    cnpj: '',
    ramoSelecionado: '',
    funcionarios: '',
    fonte: '',
    desafio: '',
    termosAceitos: false,
  })

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // if (isSubmitting) return

  // INPUTS, SELECTS e TEXTAREA (exceto telefone/cnpj/checkbox que têm handlers próprios)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.currentTarget
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  // Formata telefone enquanto digita
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget
    const formatted = formatPhoneBR(value)
    setFormData((prev) => ({ ...prev, [id]: formatted }))
  }

  // Mantém CNPJ como string, só permitindo dígitos (sem máscara, simples)
  const handleCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget
    const digits = onlyDigits(value).slice(0, 14)
    setFormData((prev) => ({ ...prev, [id]: digits }))
  }

  // Checkbox de termos
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.currentTarget
    setFormData((prev) => ({ ...prev, termosAceitos: checked }))
  }

  const validate = () => {
    const newErrors: typeof errors = {}
    const required: (keyof FormData)[] = [
      'nomePessoa',
      'email',
      'telefone',
      'nomeEmpresa',
      'cnpj',
      'ramoSelecionado',
      'funcionarios',
      'fonte',
      'desafio',
    ]

    required.forEach((k) => {
      if (!String(formData[k] ?? '').trim()) newErrors[k] = 'Campo obrigatório'
    })

    if (formData.desafio && formData.desafio.trim().length < 10) {
      newErrors.desafio = 'Descreva com pelo menos 10 caracteres'
    }

    if (formData.email && !isEmailValid(formData.email)) {
      newErrors.email = 'Informe um e-mail válido'
    }

    const phoneDigits = onlyDigits(formData.telefone)
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      newErrors.telefone = 'Telefone deve ter 10 ou 11 dígitos'
    }

    if (formData.cnpj && onlyDigits(formData.cnpj).length !== 14) {
      newErrors.cnpj = 'CNPJ deve ter 14 dígitos'
    }

    if (!formData.termosAceitos) {
      newErrors.termosAceitos = 'É necessário aceitar os Termos e a Política de Privacidade'
    }

    setErrors(newErrors)
    return { ok: Object.keys(newErrors).length === 0, newErrors }
  }

  const makeIdemKey = () =>
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { ok, newErrors } = validate()
    if (!ok) {
      const firstErrorKey = Object.keys(newErrors)[0] as keyof FormData | undefined
      if (firstErrorKey) {
        document
          .getElementById(String(firstErrorKey))
          ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }

    // 1) Sanitiza (mantive seus nomes originais)
    const payload = {
      nomepessoa: formData.nomePessoa.trim(),
      email: formData.email.trim().toLowerCase(),
      telefone: onlyDigits(formData.telefone),
      nomeempresa: formData.nomeEmpresa.trim(),
      cnpj: onlyDigits(formData.cnpj),
      ramoselecionado: formData.ramoSelecionado,
      funcionarios: formData.funcionarios,
      fonte: formData.fonte ?? 'website',
      desafio: formData.desafio.trim(),
      termosaceitos: formData.termosAceitos,
    }

    // 2) Mapeia para o formato esperado pela Edge Function (lead)
    const lead = {
      name: payload.nomepessoa,
      email: payload.email,
      phone: payload.telefone,
      company: payload.nomeempresa,
      cnpj: payload.cnpj,
      segment: payload.ramoselecionado,
      employees: payload.funcionarios,
      source: payload.fonte,
      challenge: payload.desafio,
      termsAccepted: payload.termosaceitos,
    }

    // 3) Chave de idempotência (opcional, mas recomendado – a Edge pode usar para evitar duplicatas)
    const idem = makeIdemKey()

    // 4) Chamada à Edge Function (servidor fará INSERT + EMAIL)
    try {
      setIsSubmitting?.(true) // se você tiver esse state
      showModal()

      const res = await fetch(EDGE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // ANON KEY do Supabase sempre nos dois headers:
          apikey: SUPABASE_ANON,
          Authorization: `Bearer ${SUPABASE_ANON}`,
          // Idempotência opcional:
          'X-Idempotency-Key': idem,
        },
        body: JSON.stringify({
          lead,
          // Você pode sobrescrever o assunto/HTML se quiser:
          // subject: 'Recebemos seu cadastro! ✅',
          // html: '<p>Obrigado por se cadastrar...</p>',
        }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok || data?.ok !== true) {
        // Mostra erro amigável
        const msg = data?.error || 'Não foi possível concluir seu cadastro. Tente novamente.'
        setServerMsg(msg)
        console.error('Edge error:', data)
        showModal(false, true)
        return
      }

      setFormData({
        nomePessoa: '',
        email: '',
        telefone: '',
        nomeEmpresa: '',
        cnpj: '',
        ramoSelecionado: '',
        funcionarios: '',
        fonte: '',
        desafio: '',
        termosAceitos: false,
      })
      showModal(false, false)
      setErrors({})
    } catch (err) {
      console.error('Network/Unexpected error:', err)
      // ex.: toast.error('Falha de conexão. Tente novamente em instantes.');
    } finally {
      setIsSubmitting?.(false)
    }
  }

  return (
    <S.StylesFormulario ref={ref}>
      <S.Title>
        <h2>Preencha e Concorra!</h2>
        <p>Sua empresa pode ser a próxima a ganhar um ano de agência grátis</p>
      </S.Title>
      {serverMsg && (
        <div role="alert" style={{ marginTop: 12 }}>
          {serverMsg}
        </div>
      )}
      <S.Form id="form" onSubmit={handleSubmit} noValidate>
        <div className="container">
          <div className="column">
            <div className="input">
              <label htmlFor="nomePessoa">Nome Completo*</label>
              <input
                id="nomePessoa"
                type="text"
                value={formData.nomePessoa}
                onChange={handleChange}
                className={errors.nomePessoa ? 'erro' : ''}
              />

              {errors.nomePessoa && <small style={{ color: '#ff3f34' }}>{errors.nomePessoa}</small>}
            </div>

            <div className="input">
              <label htmlFor="email">Email*</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="nome@empresa.com"
                className={errors.email ? 'erro' : ''}
              />

              {errors.email && <small style={{ color: '#ff3f34' }}>{errors.email}</small>}
            </div>

            <div className="input">
              <label htmlFor="nomeEmpresa">Nome da Empresa*</label>
              <input
                id="nomeEmpresa"
                type="text"
                value={formData.nomeEmpresa}
                onChange={handleChange}
                className={errors.nomeEmpresa ? 'erro' : ''}
              />

              {errors.nomeEmpresa && (
                <small style={{ color: '#ff3f34' }}>{errors.nomeEmpresa}</small>
              )}
            </div>

            <div className="input">
              <label htmlFor="telefone">Telefone/WhatsApp*</label>
              <input
                id="telefone"
                type="tel"
                inputMode="numeric"
                placeholder="(77) 99999-9999"
                value={formData.telefone}
                onChange={handlePhoneChange}
                className={errors.telefone ? 'erro' : ''}
              />

              {errors.telefone && <small style={{ color: '#ff3f34' }}>{errors.telefone}</small>}
            </div>
          </div>

          <div className="column">
            <div className="input">
              <label htmlFor="ramoSelecionado">Ramo de Atuação*</label>
              <select
                className={errors.ramoSelecionado ? 'erro' : ''}
                id="ramoSelecionado"
                value={formData.ramoSelecionado}
                onChange={handleChange}
              >
                <option value="">Selecione o Ramo</option>
                {ramosAtuacao.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              {errors.ramoSelecionado && (
                <small style={{ color: '#ff3f34' }}>{errors.ramoSelecionado}</small>
              )}
            </div>

            <div className="input">
              <label htmlFor="cnpj">CNPJ da Empresa*</label>
              <input
                id="cnpj"
                type="text"
                inputMode="numeric"
                placeholder="Somente números"
                value={formData.cnpj}
                onChange={handleCnpjChange}
                className={errors.cnpj ? 'erro' : ''}
              />

              {errors.cnpj && <small style={{ color: '#ff3f34' }}>{errors.cnpj}</small>}
            </div>

            <div className="input">
              <label htmlFor="funcionarios">Quantos Funcionários sua empresa possui?*</label>
              <select
                className={errors.funcionarios ? 'erro' : ''}
                id="funcionarios"
                value={formData.funcionarios}
                onChange={handleChange}
              >
                <option value="">Selecione</option>
                <option value="1 a 5">1 a 5 funcionários</option>
                <option value="6 a 20">6 a 20 funcionários</option>
                <option value="21 a 50">21 a 50 funcionários</option>
                <option value="50+">Mais de 50 funcionários</option>
              </select>

              {errors.funcionarios && (
                <small style={{ color: '#ff3f34' }}>{errors.funcionarios}</small>
              )}
            </div>

            <div className="input">
              <label htmlFor="fonte">Como soube do sorteio?*</label>
              <select
                className={errors.fonte ? 'erro' : ''}
                id="fonte"
                value={formData.fonte}
                onChange={handleChange}
              >
                <option value="">Selecione</option>
                <option value="Redes Sociais">Redes Sociais</option>
                <option value="Anúncios Online">Anúncios Online</option>
                <option value="Indicação">Indicação</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Outro">Outro</option>
              </select>
              {errors.fonte && <small style={{ color: '#ff3f34' }}>{errors.fonte}</small>}
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="input">
            <label htmlFor="desafio">
              Qual o principal desafio de marketing digital da sua empresa hoje?*
            </label>
            <textarea
              id="desafio"
              placeholder="Descreva brevemente o principal desafio que sua empresa enfrenta no marketing digital..."
              value={formData.desafio}
              onChange={handleChange}
              className={errors.desafio ? 'erro' : ''}
            ></textarea>
            {errors.desafio && <small style={{ color: '#ff3f34' }}>{errors.desafio}</small>}
          </div>

          <label htmlFor="termosAceitos" style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <input
              id="termosAceitos"
              className="check"
              type="checkbox"
              checked={formData.termosAceitos}
              onChange={handleCheckboxChange}
              required
            />
            <span>
              Eu li e aceito os{' '}
              <a href="/termos-de-uso.html" rel="noopener noreferrer" target="_blank">
                Termos de Uso
              </a>{' '}
              e a{' '}
              <a href="/politica-de-privacidade.html" target="_blank" rel="noopener noreferrer">
                Política de Privacidade
              </a>
              .
            </span>
          </label>
          {errors.termosAceitos && (
            <small style={{ color: '#ff3f34' }}>{errors.termosAceitos}</small>
          )}

          <S.Button form="form" type="submit" disabled={isSubmitting}>
            <img src={enviar} alt="Ícone de enviar" />
            Participar do Sorteio Agora!
          </S.Button>
        </div>
      </S.Form>
      <ModalForm
        onClose={() => setModal({ show: false, erro: false, loading: false })}
        show={modal.show}
        erro={modal.erro}
        loading={modal.loading}
      />
    </S.StylesFormulario>
  )
})

export default Formulario
