import React, {FC} from "react";
import styled from "styled-components";
import {frame} from "../../../styles/fragments";

const StyledSelect = styled.select`
  ${frame};
  
`

interface ISelectProps {
  children: React.ReactNode,
  setYear?: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  value: string
}

const Select: FC<ISelectProps> = ({children,setYear,value}) => {
  return (
    <StyledSelect onChange={setYear} value={value}>
      {children}
    </StyledSelect>
  );
};

export default Select;