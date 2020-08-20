import React, { Component } from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';

const Container = styled.div`
    margin-top: 33px;
    text-align: center;
`;

const Input = styled.input`
    width: 60%;
    height: 33px;
    padding: 5px;
    outline: none;
    border: 4px solid silver;
    border-radius: 11px;
    background: transparent;
    font-size: 22px;
    color: white;
`;



class Todo extends Component {
    state = {
        todoList: []
    };
    render() {        
        return(
            <Container>
                <Input placeholder='오늘 할 일은?' onKeyPress={this.handleInputKeyPress}></Input>
                <TodoList 
                    todoList={this.state.todoList} 
                    handleClickRemove={this.handleClickRemove}
                />
            </Container>
        );
    }

    componentDidMount() {
        this.setState({
            todoList: JSON.parse(localStorage.getItem('todoList')) || []
        });
    }
    
    handleInputKeyPress = event => {
        const { target: { value }} = event;
        if( event.key === 'Enter') {
            this.setState(state => ({ todoList: [...state.todoList, value] }),
                () => localStorage.setItem('todoList', JSON.stringify(this.state.todoList)));
            event.target.value = '';
        }
    };
    
    handleClickRemove = index => {
        if(window.confirm('목록에서 지우시겠습니까?')) {
            this.setState(
                state => ({
                    todoList: [
                        ...state.todoList.slice(0, index),
                        ...state.todoList.slice(index + 1)
                    ]
                }),
                () => localStorage.setItem('todoList', JSON.stringify(this.state.todoList))
            );
        } 
    };
}

export default Todo;