import React from 'react'
import { Component } from 'react'
import styled from 'styled-components'


import BetTable from './bet_tabel'


class Bets extends Component{

    render(){
        return (
            
            <div>

            <BetTable color='red'/>
            <BetTable color='black'/>
            <BetTable color='green'/>

            </div>



        )
    }
}

export default Bets