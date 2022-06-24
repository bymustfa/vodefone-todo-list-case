import React, { FC, useState } from "react";

import { ITodoItem } from "types";
import TodoService from "services";

const App: FC = () => {
  const [todoItems, setTodoItems] = useState<ITodoItem[]>([]);

  const addFunction = async () => {
    try {
      const todo = await TodoService.Add("deneme todo");
      console.log(todo);
    } catch (err) {
      console.log(err);
    }
  };

  return <div className="content">A</div>;
};

export default App;
