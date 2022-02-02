import styled from "styled-components";

interface TitleProps {
  weight?: 200 | 300 | 400 | 500 | 600 | 700,
  centered?: boolean,
}

export const Title1 = styled.h1<TitleProps>`
  text-align: center;
  font-size: 3rem;
  padding: 1rem;
  font-weight: ${({weight = 700}) => weight};
  color: ${({theme}) => theme.colors.white};
  letter-spacing: 0.1rem;
`

export const Title2 = styled.h2<TitleProps>`
  font-size: 2rem;
  padding: 1rem;
  font-weight: ${({weight = 700}) => weight};
  text-align: ${({centered}) => centered ? 'center' : 'left'};
`