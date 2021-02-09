import { useState } from 'react';
import './App.css';
import TextInput from './TextInput';
import ThemeSelector from './ThemeSelector'
import NamePicker from './NamePicker'
import {db, useDB} from './db'
import Message from './Message'

function App() {

  const [name, saveName] = useState('')
  const messages = useDB()

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
      {messages.map((msg,i)=> {
        const isMe = msg.name===name
        return <Message key={i} {...msg} isMe={isMe} />
      })}
    </main>

    <TextInput 
      send={(t)=> db.send({text:t, date:new Date(), name:name})}
    />
  </div>
}

export default App;