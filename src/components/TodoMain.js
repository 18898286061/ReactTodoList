import React from 'react'
import TodoItem from './TodoItem'

class TodoMain extends React.Component {
  render() {
    if(this.props.todos.length == 0) {
      return (
        <div className="todo-empty">目前没有待办任务</div>
      )
    } else {
      return (
        <ul className="todo-main">
          {this.props.todos.map((todo, index) => {
            return (
              <TodoItem
                index={index}
                key={index}
                time={todo.time}
                isDone={todo.isDone}
                text={todo.text}
                {...this.props} /> //{...this.props} 用来传递TodoMain的todos属性和delete、change方法。
            )
          })}
        </ul>
      )
    }
  }
}

export default TodoMain