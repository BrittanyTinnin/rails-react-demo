import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createTodo } from '../actions';

class TodosForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      completed: false
    }
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleComplete = (e) => {
    this.setState({
      completed: e.target.value === "on" ? true : false
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTodo(this.state);
    this.setState({
      title: '',
      completed: false
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title: </label>
        <input type="text" onChange={this.handleChange} value={this.state.title} name="title" /><br/>
        <label>Completed: </label>
        <input type="checkbox" onChange={this.handleComplete} checked={this.state.completed} name="completed" /><br/>
        <input type="submit" value="Create Todo" />
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createTodo }, dispatch);
}

export default connect(null, mapDispatchToProps)(TodosForm)