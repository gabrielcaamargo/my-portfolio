import React from 'react';

import { Wrapper, Name, Role } from './styles';
import { BiDownArrow } from 'react-icons/bi';
import Typewriter from 'typewriter-effect';
const roles = ["frontend developer", "coffee addicted", "passion for tech"]

export default function Presentation(){

  return(
    <Wrapper>
      <Name>Gabriel <br/> <span>Camargo</span>.</Name>
      <Role>
        { <Typewriter
          options={{
            loop: true,
            autoStart: true,
            cursorClassName: "typewriter-cursor",
            delay: 100
          }}

          onInit={ typewriter => {
            typewriter.typeString("frontend developer")
            .pauseFor(1500)
            .deleteAll()
            .typeString("technology enthusiast")
            .pauseFor(1500)
            .deleteAll()
            .typeString("coffee addicted")
            .pauseFor(1500)
            .deleteAll()
            .typeString("tech lover")
            .pauseFor(1500)
            .start()
          }}
        /> 
        }
      </Role>
      <BiDownArrow className='down-arrow'/>
    </Wrapper>
  )
}