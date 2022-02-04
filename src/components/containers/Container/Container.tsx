import React, {FC} from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

interface IContainer {
  children: React.ReactNode,
}


const Container: FC<IContainer> = ({children}) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
};

export default Container;