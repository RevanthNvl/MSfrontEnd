import React from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import GifRoundedIcon from '@mui/icons-material/GifRounded';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';
import Message from './Message'

function Chat() {
  return (
    <div className='chat'>
        <ChatHeader />

        <div className="chat__messages">
            <Message />
            <Message />
            <Message />
        </div>

        <div className="chat__input">
            <AddCircleRoundedIcon fontSize='large'/>
            <form>
                <input type="text" placeholder='Message #Test channel'/>
                <button className='chat__inputButton' type='submit'>Send Message</button>
            </form>

            <div className="chat__inputIcons">
                <CardGiftcardRoundedIcon fontSize='large'/>
                <GifRoundedIcon fontSize='large'/>
                <EmojiEmotionsRoundedIcon fontSize='large'/>
            </div>
        </div>
    </div>

  )
}

export default Chat