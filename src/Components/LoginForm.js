import React, { Component } from 'react'

export default class LoginForm extends Component {
  render() {
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

        </form>
      </div>
    )
  }
}
