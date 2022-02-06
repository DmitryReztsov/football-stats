import React, {FC} from 'react';
import styled from "styled-components";
import Container from "../containers/Container/Container";

const StyledFooter = styled.footer`
  background-color: ${({theme}) => theme.colors.bg};
  text-align: center;
  padding: 0.5rem;
`

const Footer: FC = () => (
    <StyledFooter>
      <Container>
        &#169; 2022 All rights reserved
      </Container>
    </StyledFooter>
  );

export default Footer;