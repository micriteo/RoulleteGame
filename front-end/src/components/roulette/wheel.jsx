import React from 'react'
import  {Component} from 'react'
import  styled from 'styled-components'
import Number from './number'
import Line from './line'
import{animated, config, useSpring} from 'react-spring'

function Wheel(props){

    //render(){


        var numbers = []

        for(var x = 0; x < 5; x++){
            for(var i = 0; i < 15; i++){
                if(i == 0){
                    numbers.push({color: 'green', number: 0}) //15 is the number of the 0
                }else{
                    numbers.push ({
                        color: (i % 2 == 0) ? 'black' : 'red',   //if i is even, color is black, else color is red
                        number: (i % 2 == 0) ? 15 - i : i
                    });
                }
                
            }
        }

        //styled-components is a library that allows you to create styles in javascript

        var Container = styled.div` 
            height: 100px;
            border: solid black 1px;
            overflow: hidden;            
            white-space: nowrap;
        `

         const rollAnimation = useSpring({  //useSpring is a library that allows you to create animations in javascript
             to: {marginLeft: '0px'},
             from:  {marginLeft: '-3000px'},
             reset: true,
             immediate: props.roll,
             delay: 0,
             config: {
                mass: 1,
                tension: 100,
                friction: 200
             },
              onRest: props.done
         })

      // const rollAnimation = useSpring({  //useSpring is a library that allows you to create animations in javascript
        // //     to: {marginLeft: '0px'},
        // //     from:  {marginLeft: '-1000px'},
        // // })
 
        return (

            // <animated.div>{props.number}</animated.div>

             <Container>
                 <Line/>
                
                 <animated.div style={rollAnimation}> 
                     {numbers.map((item) => (
                        <Number color={item.color} number={item.number}/>  
                    ))}
                </animated.div>

                     {/* <Number color ='red' number='1'/>
            //         <Number color ='green' number='2'/>
            //         <Number color ='black' number='3'/>
            //         <Number color ='red' number='4'/>
            //         <Number color ='black' number='5'/>
            //         <Number color ='red' number='6'/>
            //         <Number color ='black' number='7'/>
            //     </div> */}

                 </Container>
            )
    }

export default Wheel;