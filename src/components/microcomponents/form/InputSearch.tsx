import React, {FC} from 'react';
import styled from "styled-components";
import {frame} from "../../../styles/fragments";

const StyledInput = styled.input`
  ${frame};
  border: 1px solid transparent;
  background-color: ${({theme}) => theme.colors.white};
  box-shadow: 0px 0px 2px 2px ${({theme}) => theme.colors.light_gray} inset;
  color: ${({theme}) => theme.colors.dark_green};
  
  &:hover,focus {
    border: 1px solid ${({theme}) => theme.colors.dark_green};
    box-shadow: 0px 0px 2px 2px rgba(199, 244, 210, 0.2) inset;
  }
  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
`

interface IInputSearchProps {
  value?: string,
  placeholder?: string,
  setSubstr?: (e:React.ChangeEvent<HTMLInputElement>) => void,
  setSubstrByKey?: (e:React.KeyboardEvent<HTMLInputElement>) => void,
}

const InputSearch: FC<IInputSearchProps> = ({children,placeholder,setSubstr,setSubstrByKey,value}) => (
    <StyledInput placeholder={placeholder} value={value} onChange={setSubstr} onKeyDown={setSubstrByKey}>
      {children}
    </StyledInput>
  );

export default InputSearch;