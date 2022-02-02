import React, {FC} from 'react';
import styled from "styled-components";
import {frame} from "../../../styles/fragments";

const StyledButton = styled.button`
  ${frame};
`

interface IButtonProps {
  children?: string,
  getMore?: () => void,
  type?: string
}

const Button: FC<IButtonProps> = ({children,getMore}) => {
  return (
    <StyledButton onClick={getMore}>
      {children}
    </StyledButton>
  );
};

export default Button;