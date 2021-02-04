import { useState } from 'react';
import './App.css';
import TextInput from './TextInput';
import ThemeSelector from './ThemeSelector'
import NamePicker from './NamePicker'


function App() {

  const [name, saveName] = useState('')
  const [messages,setMessages] = useState([{}])

  return <div className="App">
    <header className="header">
      <div className="logo" />
      APP CHAT THINGY TO CHAT ABOUT STUFF VERSION 72.5 BETA A2 ULTRA
      <div className="logo" />
    </header>

    <div className="theme-selector">
      <NamePicker saveName={name=> saveName(name)} />
      <ThemeSelector/>
    </div>
    
    <main className="messages">
        <div className="message">
          {/* {messages[0].text} */}
          {messages.map((message) =>            
              
            <div className="message-row">
              <h2>{message.text}</h2>
              <p className="date">{message.date}</p>
              <h3 className="message-user">{"from: " + message.user}</h3>
            </div>
            
            
            )}
        </div>
    </main>

    <TextInput 
      send={(t)=> setMessages([...messages, {text:t, date:new Date().toLocaleString(), user:name}])}
    />
  </div>
}

export default App;