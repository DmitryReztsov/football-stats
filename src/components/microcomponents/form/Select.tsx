import React, {FC} from "react";
import styled from "styled-components";
import {frame} from "../../../styles/fragments";

const StyledSelect = styled.select`
  ${frame};
`

interface ISelectProps {
  children: React.ReactNode,
  change?: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  value: string
}

const Select: FC<ISelectProps> = ({children,change,value}) => {
  return (
    <StyledSelect value={value} onChange={change} >
      {children}
    </StyledSelect>
  );
};

export default Select;