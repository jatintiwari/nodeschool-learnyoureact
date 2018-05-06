import React from 'react';
import PropTypes from 'prop-types';

let style = {
  tableContent: {
    border: "1px solid black"
  },
  checkedTodo: {
    textDecoration: "line-through"
  },
  notCheckedTodo: {
    textDecoration: "none"
  },
  table: {
    border: "2px solid black"
  }
};

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props, { checked: false, selectedStyle: style.notCheckedTodo });
  }

  handleChange(event) {
    console.log(`Changing state from ${this.state.checked} to ${!this.state.checked}`);
    this.setState({
      checked: !this.state.checked,
      selectedStyle: !this.state.checked ? style.checkedTodo : style.notCheckedTodo
    });
  }

  delete(title, event) {
    this.props.onDelete(this.state.title);
  }

  render() {
    return (
      <tr style={this.state.selectedStyle}>
        <td style={style.tableContent}>
          <input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)} />
        </td>
        <td style={style.tableContent}>{this.state.title}</td>
        <td style={style.tableContent}>{this.state.detail}</td>
        <td style={style.tableContent}><button type='button' onClick={this.delete.bind(this)}>delete</button></td>
      </tr>
    )
  }
}

Todo.propTypes = {
  title: PropTypes.string.isRequired
};


export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({ todos: this.getTodosElements(this.props.data) }, this.props);
  }

  onDelete(title) {
    console.log(`deleting todo title:`, title);
    const filteredTodos = this.state.data.filter(todo => todo.title != title);
    console.log(`Filtered todos: `, filteredTodos);
    this.setState({
      data: filteredTodos
    });
  }

  getTodosElements(data) {
    return data.map(todo => <Todo title={todo.title} key={todo.title} detail={todo.detail} onDelete={this.onDelete.bind(this)}></Todo>);
  }

  render() {
    this.state.todos = this.getTodosElements(this.state.data);
    return (
      <div className="todoList">
        <table style={style.table}>
          <tbody>
            {this.state.todos}
          </tbody>
        </table>
      </div>
    );
  }
}