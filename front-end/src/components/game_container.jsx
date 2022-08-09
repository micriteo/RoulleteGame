import React from 'react'
import {Component} from 'react' //Component is a class
import Roulette from './roulette/roulette'
import styled from 'styled-components'


class GameContainer extends Component{



    render() {

        var Container = styled.div`

           color : green;
           position: absolute;
           top : 10%;
           left : 25%;
           right : 25%;
        `


        return (
            <Container>
                <Roulette/>
            </Container>
        )
    }
}

export default GameContainer;