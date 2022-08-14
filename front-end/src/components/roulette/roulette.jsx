import React from 'react'
import  {Component} from 'react'
import styled from 'styled-components'

import Wheel from './wheel'
import Countdown from './countdown'
import Bets from './bets'
import Input from './input'


class Roulette extends Component{

    state = {
        roll : true,
        count : false
    }

    componentDidMount(){
    }

    countdownDone = () => {
        this.setState({roll: false, count: true});
    }

    rollDone = () => {
        this.setState({roll: true, count: false});
    }

    roll = () => {
        var current = this.state.roll;
        this.setState({roll: current ? false : true})
    }

    render(){

        var Title = styled.h1`
        
            font-size: 5rem;
            text-align: center;

        `

        return(
            <div>
                <Title>ROULETTE</Title>
                <Countdown time={10} count={this.state.count} done={this.countdownDone}/>
                <Wheel roll={this.state.roll} done={this.rollDone}/>
                <Input/>
                <Bets/>
                {/* <button onClick={this.roll}>Roll</button> */}
            </div>
        )
    }
}

export default Roulette