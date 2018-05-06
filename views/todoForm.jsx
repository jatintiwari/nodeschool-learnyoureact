import React from 'react';

export default class TodoForm extends React.Component {

  constructor(props) {
    super(props);
  }

  add(event) {
    event.preventDefault();
    this.props.addOne({
      title: event.target.title.value,
      detail: event.target.detail.value,
      checked: false
    });
  }

  render() {
    return (
      <div className="todoForm">
        <form onSubmit={this.add.bind(this)}>
          <input type="text" name="title" />
          <input type="text" name="detail" />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}