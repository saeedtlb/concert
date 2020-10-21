import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import './landing.css';

class CountDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minute: 0,
            seconds: 0,
            date: '2021-12-24',
        };
    }

    getTimeUntil() {
        const num = Date.parse(this.state.date) - new Date();

        const seconds = Math.floor((num / 1000) % 60);
        const minute = Math.floor((num / (1000 * 60)) % 60);
        const hours = Math.floor((num / (1000 * 60 * 60)) % 24);
        const days = Math.floor(num / (1000 * 60 * 60 * 24));

        this.setState({
            days,
            hours,
            minute,
            seconds,
        });
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(), 1000);
    }

    render() {
        return (
            <Fade left delay={1500}>
                <div className='countDown'>
                    <div className='days'>
                        {this.state.days}
                        <span>days</span>
                    </div>
                    <div className='hours'>
                        {this.state.hours}
                        <span>hours</span>
                    </div>
                    <div className='minute'>
                        {this.state.minute}
                        <span>minute</span>
                    </div>
                    <div className='seconds'>
                        {this.state.seconds}
                        <span>seconds</span>
                    </div>
                </div>
            </Fade>
        );
    }
}

export default CountDown;
