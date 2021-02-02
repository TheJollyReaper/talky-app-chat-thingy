import { useState } from 'react';
import './App.css';
import TextInput from './TextInput';

function App() {
  const [messages,setMessages] = useState([{text:'Welcome!', date:new Date().toLocaleString()}])
  return <div className="App">
    <header className="header">
      <div className="logo" />
      APP CHAT THINGY TO CHAT ABOUT STUFF VERSION 72.5 BETA A2 ULTRA
      <div className="logo" />
    </header>
  
    <main className="messages">
        <div className="message">
          {/* {messages[0].text} */}
          {messages.map((message) => 
            <div className="message-row">
              <h2>{message.text}</h2>
              <p className="date">{message.date}</p>
            </div>
            )}
        </div>
    </main>

    <TextInput 
      send={(t)=> setMessages([...messages, {text:t, date:new Date().toLocaleString()}])}
    />
  </div>
}

export default App;