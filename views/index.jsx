import React from 'react';
import PropTypes from 'prop-types';

let style = {
	tableContent: {
		border: "1px solid black;"
	},
	table: {
		border: "2px solid black;"
	}
};

class TodoList extends React.Component {
	render() {
		const todos = this.props.data.map(todo => <Todo title={todo.title} key={todo.title} detail={todo.detail}></Todo>);
		return (
			<div className="todoList">
				<table style={style.table}>
					<tbody>
						{todos}
					</tbody>
				</table>
			</div>
		);
	}
}

class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = { checked: false };
		this.handleChange = this.handleChange.bind(this);
		this.addTodo = this.addTodo.bind(this);
	}

	handleChange(event) {
		console.log(`Changing state from ${this.state.checked} to ${event.target.value}`);
		this.setState({
			checked: event.target.value,
			title: 'checked'
		});
	}

	addTodo(e) {
		console.log(e.target);
		this.setState({
			checked: event.target.value,
			title: 'checked'
		});
	}

	render() {
		return (
			<tr>
				<td style={style.tableContent}>
					<input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)} />
				</td>
				<td style={style.tableContent}>{this.props.title}</td>
				<td style={style.tableContent}>{this.props.detail}</td>
			</tr>
		)
	}
}

Todo.propTypes = {
	title: PropTypes.string.isRequired
};

class TodoForm extends React.Component {
	render() {
		return (
			<div className="todoForm">
				I am a TodoForm.
			</div>
		)
	}
}

export default class TodoBox extends React.Component {
	render() {
		return (
			<div className="todoBox">
				<h1>Todos</h1>
				<TodoList data={this.props.data} />
				<TodoForm />
			</div>
		);
	}
}