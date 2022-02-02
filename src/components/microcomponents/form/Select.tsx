import React, {FC} from "react";
import styled from "styled-components";
import {frame} from "../../../styles/fragments";
import {useSearchParams} from "react-router-dom";

const StyledSelect = styled.select`
  ${frame};
`

interface ISelectProps {
  children: React.ReactNode,
  setYear?: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  value: string
}

const Select: FC<ISelectProps> = ({children,setYear,value}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <StyledSelect onChange={setYear} value={searchParams.get('season') || value}>
      {children}
    </StyledSelect>
  );
};

export default Select;