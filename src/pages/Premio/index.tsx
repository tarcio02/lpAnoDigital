import { forwardRef } from 'react'
import * as S from './styles'

import lampadaIcon from '../../assets/icons/lampadaIcon.png'
import cameraIcon from '../../assets/icons/cameraIcon.png'
import megaFoneIcon from '../../assets/icons/megafoneIcon.png'
import lupaIcon from '../../assets/icons/lupaIcon.png'
import foneIcon from '../../assets/icons/foneIcon.png'
import graduanteIcon from '../../assets/icons/graduateIcon.png'
import dataBaseIcon from '../../assets/icons/bancoDadosIcon.png'
import graficoIcon from '../../assets/icons/metasIcon.png'
import estrelaIcon from '../../assets/icons/estrelaIcon.png'

const Premio = forwardRef<HTMLDivElement>((props, ref) => {
  const cards = [
    {
      id: 1,
      icone: lampadaIcon,
      titulo: 'Consultoria Estratégica Mensal',
      paragrafo: 'Reuniões mensais para definir estratégias e acompanhar resultados.',
    },
    {
      id: 2,
      icone: cameraIcon,
      titulo: 'Criação de Conteúdo',
      paragrafo: 'Vídeos, posts, artigos e materiais visuais para suas redes sociais.',
    },
    {
      id: 3,
      icone: megaFoneIcon,
      titulo: 'Gestão de Tráfego Pago',
      paragrafo: 'Campanhas no Google Ads e Meta Ads para maximizar conversões.',
    },
    {
      id: 4,
      icone: lupaIcon,
      titulo: 'Otimização de SEO',
      paragrafo: 'Melhoria do posicionamento orgânico nos mecanismos de busca.',
    },
    {
      id: 5,
      icone: foneIcon,
      titulo: 'Suporte Dedicado',
      paragrafo: 'Equipe especializada disponível para tirar dúvidas e dar suporte.',
    },
    {
      id: 6,
      icone: graduanteIcon,
      titulo: 'Treinamentos Exclusivos',
      paragrafo: 'Acesso a cursos e workshops sobre marketing digital.',
    },
    {
      id: 7,
      icone: dataBaseIcon,
      titulo: 'Implementação de CRM',
      paragrafo: 'Sistema para gerenciar leads e relacionamento com clientes.',
    },
    {
      id: 8,
      icone: graficoIcon,
      titulo: 'Processos e Metas Definidas',
      paragrafo: 'Estruturação de processos e definição de KPIs para crescimento',
    },
    {
      id: 9,
      icone: estrelaIcon,
      titulo: 'Aumento do Reconhecimento',
      paragrafo: 'Maior visibilidade e autoridade da sua marca no mercado.',
    },
  ]

  return (
    <S.StylesPremio ref={ref}>
      <S.Titulo>
        <h1>O que você vai ganhar?</h1>
        <p>Detalhes completos do prêmio de um ano de agência grátis</p>
      </S.Titulo>
      <S.Container>
        {cards.map((card) => (
          <S.Card key={card.id}>
            <div className="icon">
              <img src={card.icone} alt="icone" />
            </div>
            <h3>{card.titulo}</h3>
            <p>{card.paragrafo}</p>
          </S.Card>
        ))}
      </S.Container>
    </S.StylesPremio>
  )
})

export default Premio
