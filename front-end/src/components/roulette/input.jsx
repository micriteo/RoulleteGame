import React from 'react'
import {Component} from 'react'
import styled from 'styled-components'


class Input extends Component{

        render(){
            
            return(
                <div>
                     <center style={{marginTop:'20px', marginBottom:'20px'}}>
                     <input type='text' placeholder='0' style={{width: '80%'}}/>
                     <button style={{width: '20%'}}>Place</button>
                     </center>
                </div>
            )
        }
}

export default Input