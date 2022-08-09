import React from 'react'
import  {Component} from 'react'
import Wheel from './wheel'
import styled from 'styled-components'


class Roulette extends Component{

    render(){

        var Title = styled.h1`
        
            font-size: 5em;
            text-align: center;

        
        
        `


        return(
            <div>
                <Title>ROULETTE</Title>
                <Wheel/>
                <button>Roll</button>
            </div>
        )
    }
}

export default Roulette