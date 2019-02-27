export function createTodo(todo) {
  return dispatch => {
    dispatch({type: "LOADING"})
    return fetch('http://localhost:5000/todos', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ todo })
    }).then(res => res.json())
    .then(data => dispatch({type: "CREATE TODO", payload: data}))
  }
}

export function getTodos(todo) {
  return dispatch => {
    dispatch({type: "LOADING"})
    return fetch('http://localhost:5000/todos')
    .then(res => res.json())
    .then(data => dispatch({type: "GET TODOS", payload: data}))
  }
}