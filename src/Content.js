import React from 'react';
import styled from 'styled-components';
import Clock from './Clock';
import Todo from './Todo';

const Container = styled.div`
    position: absolute;
    right: 0;
    top: 11px;
    width: 500px;
    height: calc(100% - 33px);
    color: white;
    overflow: auto; 
    @media (max-width: 768px) {
    width: 100%;
  }   
`;

const Content = () => {
    return(
        <Container>
            <Clock/>
            <Todo/>
        </Container>
    )
};

export default Content;