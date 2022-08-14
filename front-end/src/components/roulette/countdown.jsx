import React from 'react'
import {animated, Spring, useSpring} from 'react-spring'
import styled from 'styled-components'


function Countdown(props){

    const countdown = useSpring({
        from: {number: props.time},
        to: {number: 0},
        reset: true,
        immediate: props.count,
        config: {
            duration: props.time * 1000
        },
         onRest: props.done
    })

    const CountdownTitle = styled.p`
    
        font-size: 36px;
        margin-bottom: 20px;
        font-weight: 800;

    `

    // const BottomText = styled.p`

    //     font-size:24px;
    //     font-weight: 400;
    //     margin-top: 0px;

    // `


    return (
        <div>
        <CountdownTitle>Rolling in <animated.span>{countdown.number.interpolate(number =>number.toFixed(2))}</animated.span></CountdownTitle>
        {/* <BottomText>Place bets</BottomText> */}
        </div>
    )
}


export default Countdown