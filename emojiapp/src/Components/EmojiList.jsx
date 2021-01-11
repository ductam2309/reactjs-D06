
import {Emoji} from './Emoji'
import {emojis} from '../emojiList'
import '../assets/css/Emojilist.css'
function Emojilist(props){
    return(
        <div className='emojilist-cont'>
           <Emojis {...emojis[0]}/>
        </div>
    )
}
export {Emojilist}