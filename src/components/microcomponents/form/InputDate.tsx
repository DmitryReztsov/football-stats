import React, {FC} from 'react';
import styled from "styled-components";
import {frame} from "../../../styles/fragments";

// noinspection CssInvalidPseudoSelector
const StyledInputDate = styled.input`
  ${frame};
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0rem;
    margin: 0rem;
  };
  ::-webkit-calendar-picker-indicator {
    font-size: 1rem;
    padding: 0rem;
    margin: 0rem;
  };
`

interface IInputDateProps {
  children?: string,
  setDate?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value?: string,
}

const InputDate: FC<IInputDateProps> = ({children,value,setDate}) => (
    <StyledInputDate type="date" value={value} onChange={setDate}>
      {children}
    </StyledInputDate>
  );

export default InputDate;