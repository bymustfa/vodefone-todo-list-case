import React, { FC, ChangeEvent, useState } from "react";
import "./style.scss";
import toast from "react-hot-toast";

interface ITaskInputProps {
  onAdd: (text: string) => void;
}

const TaskInput: FC<ITaskInputProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.length > 0) {
      onAdd(text);
      setText("");
    } else {
      toast.error("Please enter a task aa");
    }
  };

  return (
    <div className="task-input-area">
      <label className="input">
        <input
          className="input__field"
          type="text"
          placeholder=" "
          value={text}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
        <span className="input__label">Enter Task</span>
      </label>

      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TaskInput;
