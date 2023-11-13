import React from 'react'
import './Message.css'
import Avatar from '@mui/material/Avatar';

function Message() {
  return (
    <div className='message'>
        <Avatar className='avatar'/>
        <div className="message__info">
          <h4>
            <span className='message__timestamp'>

            </span>
          </h4>
        </div>
    </div>
  )
}

export default Message