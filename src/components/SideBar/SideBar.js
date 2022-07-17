import React from 'react'
import "../../styles/SideBar.css"
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import SidebarCard from './SidebarCard';

const HomeRight = props => {
  return (
    <div className='sidebar'>
    <div className='sidebar-poster'>
    <img alt='poster' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt5W0yfMRfgQ92RfvRK2N1nWc3P3Q37tX2SA&usqp=CAU' />
    </div>
    <Divider   sx={{
    "&::before, &::after": {
      borderColor: "#FEB139",
    },
  }} textAlign="left">
        <Chip sx={{ border: 'solid 2px #FEB139', backgroundColor: '#FEF9A7' }} label="खबर 2 मिनट" />
    </Divider>
    {[...Array(4)].map(
        (item,i)=>{
      return (
      <SidebarCard key={i} />
      )})}
    <div className='sidebar-poster'>
    <img alt='poster' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt5W0yfMRfgQ92RfvRK2N1nWc3P3Q37tX2SA&usqp=CAU' />
    </div>
    {[...Array(6)].map(
        (item,i)=>{
      return (
      <SidebarCard key={i} />
      )})}
    </div>
  )
}


export default HomeRight