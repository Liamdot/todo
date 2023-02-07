import { useRef } from "react";

function TodoForm(props) {
  const { addTodo } = props;
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    addTodo(inputRef.current.value);
    inputRef.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a new task</h1>

      <input
        type="text"
        ref={inputRef}
        placeholder="e.g. make a new game"
      />

      <button type="submit" class="addButton">Add</button>
    </form>
  );
}

export default TodoForm;
