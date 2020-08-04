import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {//rconst snippet to create constructor
        super(props)
        this.state = {//Assigning default values
            username: '',
            comments: '',
            topic:'react'
        }
    }
    handleUsernamechange = (event) => {//Same as event handling in JS
        this.setState({
            username : event.target.value
        })        
    }
    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`My Name is ${this.state.username} . Comments ${this.state.comments}. Learning  ${this.state.topic}`);
        
        event.preventDefault()//this method prevents from Form Resetting values
    }
    
    render() {
        const { username, comments, topic} = this.state//this enables to set value from state to local constant.Else can be used as done in handleSubmit method throughout the form.
        return (
            <form onSubmit={this.handleSubmit}>{/*Onsubmiting triggers method */}
                <div>
                    <label>Username</label>
                    <input 
                        type='text' 
                        value={username} 
                        onChange={this.handleUsernamechange}
                    />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={comments}
                        onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form
