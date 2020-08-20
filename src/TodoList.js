import React from 'react';
import styled from 'styled-components';
import TodoRow from './TodoRow';

const Container = styled.div`
    margin-top: 11px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TodoList = ({ todoList, handleClickRemove}) => {
    return (
        <Container>
            {todoList.map((todo, index) => (
                <TodoRow 
                    todo={todo} 
                    key={index} 
                    index={index}
                    handleClickRemove={handleClickRemove}
                />
            ))}
        </Container>
    );
}

export default TodoList;