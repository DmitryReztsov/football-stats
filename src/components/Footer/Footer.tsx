import React, {FC} from 'react';
import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: ${({theme}) => theme.colors.bg};
    text-align: center;
    padding: 0.5rem;
`

const Footer: FC = () => {
    return (
        <StyledFooter>
            &#169; 2022 All rights reserved
        </StyledFooter>
    );
};

export default Footer;