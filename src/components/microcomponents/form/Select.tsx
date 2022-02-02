import React, {FC} from "react";
import styled from "styled-components";
import {frame} from "../../../styles/fragments";

const StyledSelect = styled.select`
  ${frame};
  
`

const Select: FC = ({children}) => {
  return (
    <StyledSelect>
      {children}
    </StyledSelect>
  );
};

export default Select;