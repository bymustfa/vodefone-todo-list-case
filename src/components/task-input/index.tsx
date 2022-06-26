import React, { FC, ChangeEvent, useState } from "react";
import "./style.scss";
import toast from "react-hot-toast";

interface ITaskInputProps {
  loading: boolean;
  onAdd: (text: string) => void;
}

const TaskInput: FC<ITaskInputProps> = ({ loading = false, onAdd }) => {
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
          disabled={loading}
          className="input__field"
          type="text"
          placeholder=" "
          value={text}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
          onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              handleAdd();
            }
          }}
        />
        <span className="input__label">Enter Task</span>
      </label>

      <button onClick={handleAdd}>
        {loading ? <span className="loader" /> : "Add"}
      </button>
    </div>
  );
};

export default TaskInput;
