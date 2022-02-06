import React, {FC} from 'react';
import styled from "styled-components";
import {frame} from "../../../styles/fragments";

const StyledButton = styled.button`
  ${frame};
`

interface IButtonProps {
  children?: string,
  click?: () => void,
  type?: string
}

const Button: FC<IButtonProps> = ({children,click}) => (
    <StyledButton onClick={click}>
      {children}
    </StyledButton>
  );

export default Button;