import React, {FC} from 'react';
import styled from "styled-components";
import {frame} from "../../../styles/fragments";

const StyledInput = styled.input`
  ${frame};
  border: 1px solid transparent;
  background-color: ${({theme}) => theme.colors.white};
  box-shadow: 0px 0px 2px 2px ${({theme}) => theme.colors.light_gray} inset;
  
  &:hover,focus {
    border: 1px solid ${({theme}) => theme.colors.dark_green};
    box-shadow: 0px 0px 2px 2px rgba(199, 244, 210, 0.2) inset;
  }
  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
`

interface IInputSearchProps {
  children?: string,
  placeholder?: string,
  onClick?: () => void
}

const InputSearch: FC<IInputSearchProps> = ({children,placeholder}) => {
  return (
    <StyledInput type={'search'} placeholder={placeholder}>
      {children}
    </StyledInput>
  );
};

export default InputSearch;