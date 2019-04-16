import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  handleKeyUp(e) {
    if(e.keyCode == 13) {
      let value = e.target.value
      if(!value) return false
      let newTodoItem = {
        text: value,
        isDone: false
      }
      e.target.value = ''
      this.state.todos.push(newTodoItem)
      this.setState({todos: this.state.todos})
    }
  }

  render() {
    return (
      <div className="todo-input">
        <input type="text" 
          placeholder="请输入"
          onKeyUp={this.handleKeyUp.bind(this)} />
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <li key={index}> {todo.text} </li>
            )
          })}
        </ul>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'))