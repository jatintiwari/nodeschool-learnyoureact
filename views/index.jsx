import React from 'react';

import TodoList from './todoList.jsx';
import TodoForm from './todoForm.jsx';

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