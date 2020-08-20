import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 13px 0;
    width: 60%;
    text-align: left;
`;
const Text = styled.div`
    display: inline-block;
    cursor: pointer;
    font-size: 25px;
    &:hover {
        opacity: 0.4;
    }
`;


class TodoRow extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.todo === nextProps.todo){
            return false;
        }
        return true;
    }
    render() {
        const { todo, index, handleClickRemove } = this.props;
        return (
            <Container>
            <Text onClick={() => handleClickRemove(index)}>{index + 1} . {todo}</Text>            
        </Container>
        )
    }
}


export default TodoRow;