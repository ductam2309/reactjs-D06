import {Component} from 'react'
import '../assets/css/seachbar.css'
 class SeachBar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className='seachbar-cont'>
                <input type="text" placeholder='Enter your Emoji'/>
            </div>
        )
    }
}
export {SeachBar}