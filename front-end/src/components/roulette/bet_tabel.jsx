import React from 'react'
import { Component } from 'react'
import styled from 'styled-components'


class BetTable extends Component{

    render(){

        var Container = styled.div`

            display: table-cell;


        `


        var Table = styled.table`

            width: 100%;


        `

        var Title = styled.p`
        
            text-align : center;
            font-size : 18px;
        
        
        `

        var Text = styled.td`
        
            text-align : center;
            border-left: 1px solid #000;
            &:nth-child(0){
                border: none;
            }

        `


        return (
            <Container>
                <Title>{this.props.color}</Title>
                <Table>
                    <tr>
                        <Text>Test</Text>
                        <Text>400$</Text>
                    </tr>
                </Table>
            </Container>
        )
    }
}

export default BetTable