import React, {FC} from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0.5rem;
`

interface IContainer {
  children: React.ReactNode,
}


const Container: FC<IContainer> = ({children}) => (
    <StyledContainer>
      {children}
    </StyledContainer>
  );

export default Container;