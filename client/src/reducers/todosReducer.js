const todosReducer = (state = {todos: [], loading: false}, action) => {
  switch(action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true
      }
    case 'CREATE TODO':
      const todos = [...state.todos];
      todos.push(action.payload)
      return {
        ...state,
        todos,
        loading: false
      }
    case 'GET TODOS':
      return {
        ...state,
        todos: action.payload,
        loading: false
      }
    default:
      return state;
  }
}

export default todosReducer;