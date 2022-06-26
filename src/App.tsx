import React, { FC, lazy, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import { ITodoItem } from "types";
import TodoService from "services";

const ListItem = lazy(() => import("components/list-item"));
const TaskInput = lazy(() => import("components/task-input"));

const App: FC = () => {
  const [todoItems, setTodoItems] = useState<ITodoItem[]>([]);
  const [countText, setCountText] = useState("( 0 / 0 )");

  const [loader, setLoader] = useState(false);

  // All todos fetched from server
  const getAllTodos = async () => {
    try {
      setLoader(true);
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
      setLoader(false);
    } catch (err) {
      setLoader(false);
    }
  };

  const addFunction = async (text: string) => {
    try {
      text = text.trim();
      const todo = await TodoService.Add(text);
      if (todo.status) {
        toast.success(todo.message);
        await getAllTodos();
      } else {
        toast.error(todo.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const changeStatusFunction = async (id: number, todoItem: ITodoItem) => {
    try {
      const todo = await TodoService.ChangeStatus(id, todoItem);
      if (todo.status) {
        toast.success(todo.message);
        countTextFunction();
      } else {
        toast.error(todo.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const deleteFunction = async (id: number) => {
    try {
      const todo = await TodoService.Delete(id);
      if (todo.status) {
        toast.success(todo.message);
        await getAllTodos();
      } else {
        toast.error(todo.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const countTextFunction = () => {
    const trueCount = todoItems.filter((item) => item.status).length;
    setCountText("( " + trueCount + " / " + todoItems.length + " )");
  };

  // Page load call getAllTodos
  useEffect(() => {
    getAllTodos();
  }, []);

  useEffect(() => {
    countTextFunction();
  }, [todoItems]);

  return (
    <div className="content">
      <div className="head">
        <h1>All Tasks</h1>
        <span>{countText}</span>
      </div>

      <TaskInput loading={loader} onAdd={addFunction} />

      {loader ? (
        <span className="loader" />
      ) : todoItems.length > 0 ? (
        <ul className="list">
          {todoItems.map((todoItem) => (
            <ListItem
              key={todoItem.id}
              todoItem={todoItem}
              onStatusChange={(status) => {
                todoItem.status = status;
                changeStatusFunction(todoItem.id, todoItem);
              }}
              onDelete={() => {
                deleteFunction(todoItem.id);
              }}
            />
          ))}
        </ul>
      ) : (
        <div className="no-tasks">No Tasks</div>
      )}

      <Toaster position="top-right" reverseOrder={false} />

      <div className="signature">
        Coded with ❤️ by{" "}
        <a href="https://mustafaozturk.kim/tr" target="_blank">
          Mustafa ÖZTÜRK
        </a>
      </div>
    </div>
  );
};

export default App;
