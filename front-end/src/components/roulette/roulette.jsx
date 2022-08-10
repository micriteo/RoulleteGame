import React from 'react'
import  {Component} from 'react'
import Wheel from './wheel'
import styled from 'styled-components'


class Roulette extends Component{

    state ={
        roll : false
    }

    roll = () => {
        var current = this.state.roll;
        this.setState({roll: current ? false : true})
    }

    render(){

        var Title = styled.h1`
        
            font-size: 5em;
            text-align: center;

        
        
        `

        return(
            <div>
                <Title>ROULETTE</Title>
                <Wheel roll={this.state.roll}/>
                <button onClick={this.roll}>Roll</button>
            </div>
        )
    }
}

export default Roulette