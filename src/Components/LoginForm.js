import React, { Component } from 'react';
import {VERIFIED_USER} from "../Events";


export default class LoginForm extends Component {
  
  constructor(props){
      super(props);
      this.state = {
          nickname: "",
          error:""
      }
  } 

  setError = (error)=>{
    this.setState({error})
 }
 
  setUser=(user,isUser)=>{
       console.log(user,isUser)
        if(isUser) {this.setError("Username Taken")}
        else {this.props.setUser(user)}
   }

  handleChange =(e)=>{
        this.setState({nickname:e.target.value})
  }
  handleSubmit =(e)=>{
    e.preventDefault();
    const{socket} = this.props;
    const{nickname} = this.state;
    socket.emit(VERIFIED_USER,nickname,this.setUser)
  
 


  }

    render() {
        const{nickname,error} = this.state;
    return (
      <div className ="login">
        <form onSubmit={this.handleSubmit} className="login-form">

        <label htmlFor = "nickname">
           <h2>Got a nickname?</h2>
        </label>
        
        <input 
           ref = {(input) =>{this.textInput = input }}
           type="text"
           id ="nickname"
           value ={nickname}
           onChange={this.handleChange}
           placeholder={"Give nickname..."}/>

        <div className="error">{error? error:null}</div>

        </form>
      </div>
    )
  }
}
