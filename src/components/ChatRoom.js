import React, { Component } from 'react';

class ChatRoom extends Component {

  constructor() {
    super();
    this.updateMessage = this.updateMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.state = {
      message: '',
      messages: []
    }
  }

  componentDidMount() {
    firebase.database().ref('messages/').on('value', snapshot => {
      const currentMessages = snapshot.val();
      
      if (currentMessages != null) {
        this.setState({
          messages: currentMessages
        });
      }

    });
  }

  updateMessage(e) {
    this.setState({
      message: e.target.value
    });
  }

  submitMessage() {
    const message = {
      id: this.state.messages.length,
      text: this.state.message
    };
    
    firebase.database().ref('messages/' + message.id).set(message);
    this.setState({
        message: ''
    });
  }

  render() {
    // looping Messages
    const currentMessages = this.state.messages.map((message, i) => {
      return (
       <li key={message.id} className="list-group-item">{message.text}</li>
      )
    })

    return(
      <div className="card">
        <div className="card-body">
          <ul className="list-group">
            {currentMessages} 
          </ul>
        </div>

        <div className="card-footer">
          <input 
            value={this.state.message}
            type="text" 
            placeholder="Type your Message"
            onChange={this.updateMessage}
            className="form-control"
          />
          <button onClick={this.submitMessage} className="btn btn-primary btn-block">
            Send
          </button>
        </div>
      </div>
    )
  }
}

export default ChatRoom;