import React, { FC, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import { ITodoItem } from "types";
import TodoService from "services";

import Check from "components/check";
import ListItem from "components/list-item";
import TaskInput from "components/task-input";

const App: FC = () => {
  const [todoItems, setTodoItems] = useState<ITodoItem[]>([]);

  // All todos fetched from server
  const getAllTodos = async () => {
    try {
      const todos = await TodoService.GetAll();

      if (todos.status) {
        //  todos data sort by id
        const sortedTodos = todos.data.sort(
          (a: ITodoItem, b: ITodoItem) => b.id - a.id
        );
        setTodoItems(sortedTodos);
      } else {
        setTodoItems([]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addFunction = async (text: string) => {
    try {
      text = text.trim();
      const todo = await TodoService.Add(text);
      console.log(todo);
      toast.success("Successfully toasted!");
      getAllTodos();
    } catch (err) {
      console.log(err);
    }
  };

  // Page load call getAllTodos
  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <div className="content">
      <div className="head">
        <h1>All Tasks</h1>
        <span>( 0 / 0 )</span>
      </div>

      <TaskInput onAdd={addFunction} />

      <ul className="list">
        {todoItems.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onStatusChange={() => {
              console.log("status change");
            }}
            onDelete={() => {
              console.log("delete");
            }}
          />
        ))}
      </ul>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default App;
