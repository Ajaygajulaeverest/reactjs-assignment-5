import "./App.css";
import React from "react";

function App() {
  const [todo, setTodo] = React.useState([{ additem: "Add Todo items" }]);
  const [text, setText] = React.useState("");
  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleAddTodo = () => {
    setTodo(todo.concat({ additem: text }));
    setText("");
  };
  return (
    <div className="main">
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleAddTodo}>
        Add todo
      </button>
      <Todo list={todo} />
    </div>
  );
}
const Todo = React.memo(({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <TodoItem item={item} />
      ))}
    </ul>
  );
});
const TodoItem = React.memo(({ item }) => {
  return <li>{item.additem}</li>;
});
export default App;
