import React, { Component } from 'react'
// const React = require('react');
export default class Student extends Component {
    constructor(){
        super()
        this.state = {
            name : "sonam",
            isShow : false,
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleShow=()=>{
        this.setState({isShow:true})
    }
    handleChange(e){
        console.log(e.target.value)
        this.setState({name:e.target.value})
    }
    handleShow2 = () =>{
        this.setState({isShow:!this.state.isShow})
    }
  render() {
    return (
      <div>
        <h1>the name is {this.state.name}</h1>
        <input type="text" onChange={this.handleChange} placeholder='enter your name' />
        <hr />
        <button onClick={this.handleShow}>Show</button>
        {
            this.state.isShow && <h1>Welcome User</h1>
        }
        <hr />
        <button onClick={this.handleShow2}>{this.state.isShow ? "Hide" : "Show"}</button>
        {
            this.state.isShow ? <h1>Welcome User</h1> : <h1>you are not authorize</h1>
        }
      </div>
    )
  }
}
