import React from 'react'
import {Component} from 'react' //Component is a class
import styled from 'styled-components'


class Number extends Component{

    render(){

        var Container = styled.div`
        
            width: 90px;
            height: 90px;
            border: black 1px solid;
            margin: 5px 1px 0px 0px;
            display: inline-block;
        `

        var NumberText = styled.div`

            text-align: center;
            display: flex;
            justify-content: center;
            color: white;
            margin-top: 1.5rem;
            font-size: 48px;
        
        `

        return(
            <Container style={{backgroundColor: this.props.color}}> 
                <NumberText>{this.props.number}</NumberText>
            </Container>
        )


    }

}

export default Number;