import "./styles.css";
import React from "react";

export default function App() {
  const [todos, setTodos] = React.useState([]);
  const [todoItem, setTodoItem] = React.useState("");
  const [id, setId] = React.useState(0);
  const [currentuser, setCurrentUser] = React.useState(null);
  const handlechange = (e) => {
    setTodoItem(e.target.value);
    if (todos.length === 0) {
      setId(0);
    } else {
      setId(id + 1);
    }
  };

  const handleSubmit = () => {
    if (currentuser && Object.keys(currentuser).length !== 0) {
      let updated = [...todos];
      for (var i = 0; i < updated.length; i++) {
        if (updated[i].id === currentuser.id) {
          updated[i].value = todoItem;
        }
      }
      setTodos(updated);
      setCurrentUser(null);
    } else {
      let item = { id: id, value: todoItem };
      setTodos([...todos, item]);
    }

    setTodoItem("");
  };

  const DeleteTodo = (data) => {
    console.log(data);
    let updated = todos.filter((item) => item.id !== data.id);
    setTodos(updated);
  };

  const EditTodo = (data) => {
    setCurrentUser(data);
    setTodoItem(data.value);
  };

  return (
    <div className="App">
      <form>
        <label> Name </label>
        <input type="text" onChange={handlechange} value={todoItem} />

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <br />
      <br />

      {todos &&
        todos.length > 0 &&
        todos.map((item, i) => (
          <React.Fragment>
            <div key={item.id}>
              <div> {item.value} </div>
              <button onClick={() => EditTodo(item)}> Edit </button>
              <button onClick={() => DeleteTodo(item)}> Delete </button>
            </div>
          </React.Fragment>
        ))}
    </div>
  );
}
