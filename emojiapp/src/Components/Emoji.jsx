import React from 'react'
import '../assets/css/Emoji.css'
import {emojis} from '../emojiList'
function Emoji(props){
    const {symbol, title}= props
    return(
        <div className='emoji-cont'>
            <p>
                {symbol} {title}

            </p>
        </div>
    )
}
export {Emoji}