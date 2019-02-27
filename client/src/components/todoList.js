import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTodos } from '../actions';


class TodoList extends Component {
  componentDidMount = () => {
    this.props.getTodos();
  }

  render() {
    return (
      <ul>
        {this.props.loading ? <li>Loading...</li> : null}
        {this.props.todos.map((todo, i) => <li key={i}>{todo.title} - {todo.completed ? 'Complete' : 'Not Completed'}</li>)}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
    loading: state.todos.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getTodos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);