import React, { Component } from "react";
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 40px;
    font-size: 40px;
    text-align: center;
`;

const CurDate = styled.div`
    font-size: 24px;
`;

const CurDay = styled.div`
    font-style: italic;
`;

const CurTime = styled.div`
    font-size: 55px;
    font-weight: 600;
`;


class Clock extends Component{
    state = { date: new Date() }
    render() {
        const { date } = this.state;
        return (
            <Container>
                <CurDate>
                    {date.getDate()}&nbsp;/&nbsp;
                    {date.getMonth() + 1}&nbsp;/&nbsp;
                    {date.getFullYear()}                   
                </CurDate>
                <CurDay>
                    {
                        date.getDay() === 0
                        ? 'Sunday'
                        :date.getDay() === 1
                        ? 'Monday'
                        :date.getDay() === 2
                        ? 'Tuesday'
                        :date.getDay() === 3
                        ? 'Wednesday'
                        :date.getDay() === 4
                        ? 'Thursday'
                        :date.getDay() === 5
                        ? 'Friday'
                        : 'Saturday'
                    }
                </CurDay>
                <CurTime>
                    {date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}
                    &nbsp;:&nbsp;
                    {date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}                    
                </CurTime>
            </Container>
        );
    }
    
    getDate = () => {
        this.setState({ date: new Date()});
    };

    componentDidMount() {
        this.oneMinuteCall = setInterval(() => {
            this.getDate()
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.oneMinuteCall);
    }
}

export default Clock;