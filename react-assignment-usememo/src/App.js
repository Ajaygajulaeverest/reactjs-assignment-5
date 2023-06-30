import React, { useState, useEffect, useMemo } from "react";
// import axios from 'axios';
import "./App.css";
import Buttons from "./buttons";

function Completedlist() {
  return completedItems.map((user) => {
    return (
      <p className="completeditem">
        {user.id} - Title: {user.title} completed
      </p>
    );
  });
}
function Incompletedlist() {
  return incompletedItems.map((user) => {
    return (
      <p className="incompleteditem">
        {user.id} - Title: {user.title}
      </p>
    );
  });
}
let completedItems = [];
let incompletedItems = [];
function App() {
  const [users, setUsers] = useState([]);
  const [completeditems, setCompletedItems] = useState(false);
  const [incompleteditems, setIncompletedItems] = useState(false);
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setUsers(data);
    // console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  completedItems = useMemo(
    () => users.filter((item) => item.completed === true),
    [users]
  );
  incompletedItems = useMemo(
    () => users.filter((item) => item.completed === false),
    [users]
  );
 
  return (
    <div className="maindiv">
      <h1>
        <Buttons
          Prop="completed items"
          setCompleted={() => {
            setCompletedItems(true);
            setIncompletedItems(false);
          }}
        />
        <Buttons
          Prop="incompletd items"
          setCompleted={() => {
            setIncompletedItems(true);
            setCompletedItems(false);
          }}
        />
      </h1>
      <>
        {completeditems && <Completedlist />}
        {incompleteditems && <Incompletedlist />}
      </>
    </div>
  );
}
export default App;
