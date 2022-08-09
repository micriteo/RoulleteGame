import React from 'react'
import { Component } from 'react'
import styled from 'styled-components'


class Line extends Component {

    render(){


        var Line = styled.div`
        
            height: 100px;
            border-left: solid grey 3px;
            position: absolute;
            z-index: 1;
            left: 50%;
            right: 50%;
        `
    

     return (

        <Line></Line>

         )
    }
}

export default Line;