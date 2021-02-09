function Message(props){
    return <div className="message">
    <div>
      <h3 className="message-user">{"from: " + props.name}</h3>
      <div className="message-row">
        <h2>{props.text}</h2>
        <p className="date">{new Date(props.date.seconds * 1000).toLocaleString()}</p>
        {/* <p className="date">{message.date}</p> */}
        
      </div>
    </div>
  </div>
}

export default Message


