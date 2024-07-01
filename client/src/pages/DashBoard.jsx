import React from 'react'
import Card from '../components/Card'

const DashBoard = () => {
  return (
    <div className='px-5 grid grid-cols-2 md:grid-cols-4 gap-4'>
      <Card type="mycourse"/>
      <Card type="mycourse"/>
      <Card type="mycourse"/>
      <Card type="mycourse"/>
    </div>
  )
}

export default DashBoard
