import React from 'react';

import TodoList from './todoList.jsx';
import TodoForm from './todoForm.jsx';

export default class TodoBox extends React.Component {
	
	constructor(props){
		super(props);
		this.state = Object.assign({}, this.props);
	}

	addOne(todo){
		this.state.data.push(todo);
		this.setState({
			data: this.state.data
		});
	}

	render() {
		return (
			<div className="todoBox">
				<h1>Todos</h1>
				<TodoList data={this.state.data} />
				<TodoForm addOne={this.addOne.bind(this)}/>
			</div>
		);
	}
}