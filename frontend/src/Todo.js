import './Todo.css';

function translateCompleted(complete) { 
  if (complete)
    return "Yes";

  return "No";
}

function Todo(props) {
  const { todo } = props;
  const { deleteTodo, setTodoCompleted } = props;

  return (
    <tr>
        <td>{todo.id}</td>
        <td>{todo.title}</td>
        <td><button onClick={(e) => { setTodoCompleted(todo)}}>{translateCompleted(todo.completed)}</button></td>  
        <td><button onClick={() => deleteTodo(todo.id)}>Delete</button></td>
    </tr>
  );
}

export default Todo;