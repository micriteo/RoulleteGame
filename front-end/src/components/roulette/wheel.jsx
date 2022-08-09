import React from 'react'
import  {Component} from 'react'
import  styled from 'styled-components'
import Number from './number'
import Line from './line'

class Wheel extends Component{

    render(){


        var numbers = []

        for(var i = 0; i < 15; i++){
            if(i == 7){
                numbers.push({color: 'green', number:15}) //15 is the number of the 0
            }
            numbers.push ({
                color: (i % 2 == 0) ? 'black' : 'red',   //if i is even, color is black, else color is red
                number: (i % 2 == 0) ? 14 - i : i
            });
        }

        
        var Container = styled.div` //styled-components is a library that allows you to create styles in javascript
            width: 100%;
            height: 100px;
            border: solid black 1px;
            overflow: hidden;            
            white-space: nowrap;
        `


 
        return (

            <Container>
                <Line/>
                <div>
                    {numbers.map((item) => (                                         //map is a method that loops through an array and returns a new array
                        <Number color={item.color} number={item.number}/>       //item is the current element in the array
                        // console.log(item)
                    ))}
                    <Number color ='red' number='1'/>
                    <Number color ='green' number='2'/>
                    <Number color ='black' number='3'/>
                    <Number color ='red' number='4'/>
                    <Number color ='black' number='5'/>
                    <Number color ='red' number='6'/>
                    <Number color ='black' number='7'/>
                </div>

            </Container>
            )
    }
}

export default Wheel;