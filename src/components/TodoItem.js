import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Checkbox } from 'antd'

class TodoItem extends React.Component {
  handleChange() {
    let isDone = !this.props.isDone
    this.props.changeTodoState(this.props.index, isDone)
  }

  handleDelete() {
    this.props.deleteTodo(this.props.index)
  }

  handleMouseIn() {
    ReactDOM.findDOMNode(this.refs.delButton).style.display = 'inline-block'
  }

  handleMouseOut() {
    ReactDOM.findDOMNode(this.refs.delButton).style.display = 'none'
  }

  render() {
    let className = this.props.isDone? 'tesk-done' : ''
    return (
      <li 
        onMouseOver={this.handleMouseIn.bind(this)}
        onMouseOut={this.handleMouseOut.bind(this)}
      >
        <Checkbox
          checked={this.props.isDone}
          onChange={this.handleChange.bind(this)} />

        <span className="time">{this.props.time}</span>
        <span className = {className + 'task'}>{this.props.text}</span>

        <Button
          ref="delButton"
          type="danger"
          size="small"
          onClick={this.handleDelete.bind(this)}
        >删除
        </Button>
      </li>
    )
  }
}

export default TodoItem