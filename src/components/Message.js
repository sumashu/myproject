import { Component } from "react";

class Message extends Component{
     render(){
        return <h1>Message: {this.props.MessageContent}</h1>
     }
}

export default Message