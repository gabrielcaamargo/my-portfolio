import React from 'react';

import { Wrapper, Name, Role } from './styles';

import { BiDownArrow } from 'react-icons/bi';

export default function Presentation(){
  return(
    <Wrapper>
      <Name>Gabriel <br/> <span>Camargo</span>.</Name>
      <Role>frontend developer</Role>
      <BiDownArrow className='down-arrow'/>
    </Wrapper>
  )
}