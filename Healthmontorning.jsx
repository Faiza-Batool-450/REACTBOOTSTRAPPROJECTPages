import React from 'react'
import HealthPage from './Health/HealthPage'
import {  NavLink } from 'react-router-dom';

const Healthmontorning = () => {
    const handleClick = () => {
    console.log("Button clicked!");
      };
  return (
    <>
     <NavLink to="/">
      <button onClick={handleClick}  class="button-52" >Go To Heal Sync</button>
      </NavLink>
      <HealthPage/>
    </>
  )
}

export default Healthmontorning

