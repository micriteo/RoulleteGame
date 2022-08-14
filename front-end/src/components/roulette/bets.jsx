import React from 'react'
import { Component } from 'react'
import styled from 'styled-components'


import BetTable from './bet_tabel'


class Bets extends Component{

    render(){
        return (
            
            <div style={{display: 'table', width: '100%'}}>
                <div style={{display: 'table-row'}}>
                <BetTable color='RED'/>
                <BetTable color='GREEN'/>
                <BetTable color='BLACK'/>    
                </div>
            </div>
        )
    }
}

export default Bets