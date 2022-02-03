import React, {FC} from 'react';
import styled from "styled-components";
import {frame} from "../../../styles/fragments";

const StyledButton = styled.button`
  ${frame};
`

interface IButtonProps {
  children?: string,
  click?: (e:React.MouseEvent<HTMLButtonElement>) => void,
  type?: string
}

const Button: FC<IButtonProps> = ({children,click}) => {
  return (
    <StyledButton onClick={click}>
      {children}
    </StyledButton>
  );
};

export default Button;