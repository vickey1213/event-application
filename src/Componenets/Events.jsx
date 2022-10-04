import React from 'react'
import { FcCalendar } from 'react-icons/fc';
import { GoLocation } from 'react-icons/go';

const Events = () => {
  return (
    <div>
        <div>
            <h1>Birthday Bash</h1>
            <p>hosted by Elysia</p>
        </div>
        <div>
            <FcCalendar/>
            <p>date</p>
        </div>
        <div>
            <GoLocation/>
        </div>
    </div>
  )
}

export default Events