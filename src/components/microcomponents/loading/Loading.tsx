import React, {FC} from 'react';
import styled from "styled-components";


const StyledImg = styled.img`
  backgroundColor: white; 
  display: block;
  margin: 0 auto;
`

const Loading: FC = () => {
  return (
    <StyledImg src={'/gifs/loading.gif'}/>
  );
};

export default Loading;