import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import {SeachBar} from './Components/SeachBar'
import {Emojilist} from './Components/EmojiList'
function App() {
  return (
    <div className="App">
      <Header/>
      <SeachBar/>
      <Emojilist />
    </div>
  )
}

export default App;
