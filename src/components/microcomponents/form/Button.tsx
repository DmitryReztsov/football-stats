import React, {FC} from 'react';
import styled from "styled-components";
import {frame} from "../../../styles/fragments";

const StyledButton = styled.button`
  ${frame};
`

interface IButtonProps {
  children?: string,
  onClick?: () => void,
  type?: string
}

const Button: FC<IButtonProps> = ({children,onClick}) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;