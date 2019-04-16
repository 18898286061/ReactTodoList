import React from 'react'

class TodoHeader extends React.Component {

  handleKeyUp(e) {
    if(e.keyCode == 13) {
      let value = e.target.value
      if(!value) return false
      let newTodoItem = {
        text: value,
        isDone: false
      }
      e.target.value = ''
      this.props.addTodo(newTodoItem)
    }
  }

  render() {
    return (
      <input type="text" 
          placeholder="请输入"
          onKeyUp={this.handleKeyUp.bind(this)} />
    )
  }
}

export default TodoHeader