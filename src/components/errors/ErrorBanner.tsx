import React, {FC} from 'react';
import styled from "styled-components";
import {Title2} from "../microcomponents/titles/Titles";
import {errors} from "../../interfaces/errors";

interface IErrorBannerProps {
  error: number,
}

const StyledErrorBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  
  img {
    width: 7rem;
    height: 7rem;
  }
  p {
    font-size: 1.5rem;
    text-align: center;
    width: 60%;
  }
`

const ErrorBanner: FC<IErrorBannerProps> = ({error}) => (
    <StyledErrorBanner>
      <img src="/football-stats/error/sad-ball.png" alt="error-logo"/>
      <Title2>Error {error}</Title2>
      <p>{errors.get(error)}</p>
    </StyledErrorBanner>
  );

export default ErrorBanner;