import React, {FC} from "react";
import styled from "styled-components";
import {frame} from "../../../styles/fragments";

const StyledSelect = styled.select`
  ${frame};
`

interface ISelectProps {
  children: React.ReactNode,
  setSeason?: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  value: string
}

const Select: FC<ISelectProps> = ({children,setSeason,value}) => {
  return (
    <StyledSelect value={value} onChange={setSeason} >
      {children}
    </StyledSelect>
  );
};

export default Select;