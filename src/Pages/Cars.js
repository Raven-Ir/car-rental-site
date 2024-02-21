import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const Cars = () => {

  return (
    <>
      <div className='text-5xl text-center p-2 text-blue-400'>Cars</div>
      <Calendar className="float-right m-6 justify-center border-b-2"/>
    </>
  )
}

export default Cars