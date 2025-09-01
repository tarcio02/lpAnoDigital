import * as S from "./styles"

import presenteIcon from "../../../assets/icons/presenteIcon.png"

const Hero = () => {
    return (
        <S.StylesHero>
            <S.HeroContainer>
                <S.Container>
                    <S.Titulo>Ganhe um <span>Ano de Agência Grátis</span> com o Método B7-3X!</S.Titulo>
                    <S.Sub>
                        Sua empresa em Vitória da Conquista pode ser a próxima a revolucionar o marketing digital e 
                        multiplicar seus resultados por 3x.
                    </S.Sub>
                    <S.Cta>
                        <img src={presenteIcon} alt="Ìcone de presenet" />
                        Participar do Sorteio Agora!
                    </S.Cta>
                    <S.Gatilho></S.Gatilho>
                </S.Container>
            </S.HeroContainer>
        </S.StylesHero>
    )
}

export default Hero