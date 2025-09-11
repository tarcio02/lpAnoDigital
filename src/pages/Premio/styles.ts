import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const StylesPremio = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${theme.spaces.paddingMobile};

  @media (min-width: 601px) {
    padding: ${theme.spaces.paddingDesktop};
  }
`

export const Titulo = styled.div`
  text-align: center;
  color: #333333;

  h1 {
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 1px;
  }

  p {
    font-size: 18px;
    margin-top: 24px;
    line-height: 24px;
    letter-spacing: 1px;
  }
`

export const Container = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  margin-top: 50px;

  @media (min-width: 601px) {
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    width: auto;
    flex-wrap: wrap;
    gap: 24px;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 24px;
  padding: 32px;
  color: #333333;
  width: 100%;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.1);

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(to right, #008dfd, #e91fe9, #ea1fe9);

    img {
      width: 32px;
    }
  }

  p {
    letter-spacing: 1px;
  }

  @media (min-width: 769px) {
    height: 260px;
    width: 360px;

    .icon {
      height: 56px;
      width: 56px;

      img {
        width: 32px;
      }
    }
  }

  h3 {
    font-size: 16px;
  }

  p {
    font-size: 16px;
    letter-spacing: 1px;
  }
`

// export const CardPremio = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   gap: 16px;
//   border-radius: 16px;
//   margin-top: 40px;
//   padding: 32px;
//   background: linear-gradient(to right, #008dfd, #e91fe9, #ea1fe9);

//   h3 {
//     font-size: 24px;
//   }

//   h2 {
//     font-size: 32px;
//   }

//   p {
//     font-size: 16px;
//   }

//   @media (min-width: 601px) {
//     width: 360px;
//     margin: 40px auto 0;
//   }
// `
