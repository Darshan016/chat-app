import React, {Component} from 'react'
import Header from './components/Header/Header'
import ChatHistory from './components/ChatHistory/ChatHistory'
import ChatInput from './components/ChatInput/ChatInput'
import './App.css'
import {connect, sendMsg} from './api'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            chatHistory : []
        }
    }

    componentDidMount(){
        connect((msg)=>{
            console.log('new message')
            this.setState(prevState =>({
                chatHistory : [...prevState.chatHistory, msg]
            }))
            console.log(this.state)
        })
    }

    render(){
        return(
            <div className='App'>
                <Header />
                <ChatHistory chatHistory={this.state.chatHistory} />
                <ChatInput send={this.send} />
            </div>
        )
    }
}

export default App