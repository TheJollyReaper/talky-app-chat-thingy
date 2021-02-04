import {useState} from 'react'
import { AiOutlineSend } from "react-icons/ai";
import level from "./sfx/level.mp3"
import key_press from "./sfx/key_press.mp3"

function TextInput(props) {
  const [text, setText] = useState('')

  function sendMessage(){
    new Audio(level).play()
    if(text==='') return // skip the function
    props.send(text)
    setText('')
  }

  function keyPressed(e){
    if(e.key==='Enter') {
      sendMessage();
    } else {
      new Audio(key_press).play()
    }
  }

  return <footer className="text-input">
    <input 
      className="inputBox"
      placeholder="Write your message"
      value={text}
      onChange={e=> setText(e.target.value)}
      onKeyPress={keyPressed}
    />
    <button onClick={sendMessage} disabled={!text} className="send-button">
      <AiOutlineSend title="send" 
        style={{minWidth:'0.7rem',marginLeft:2}} 
      />
    </button>
  </footer>
}

export default TextInput