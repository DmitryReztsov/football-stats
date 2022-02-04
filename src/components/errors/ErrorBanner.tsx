import React, {FC} from 'react';
import {Title2} from "../microcomponents/titles/Titles";
import {errors} from "../../interfaces/errors";
import styled from "styled-components";

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
  }
`

const ErrorBanner: FC<IErrorBannerProps> = ({error}) => {
  return (
    <StyledErrorBanner>
      <img src="/error/sad-ball.png" alt="error-logo"/>
      <Title2>Error {error}</Title2>
      <p>{errors.get(error)}</p>
    </StyledErrorBanner>
  );
};

export default ErrorBanner;