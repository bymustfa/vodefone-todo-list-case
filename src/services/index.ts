import axios from "axios";
import { ITodoItem } from "types/index";

// axios base url config
axios.defaults.baseURL = "http://localhost:3001/";

const Add = async (text: string) => {
  try {
    // check text is not empty
    if (!text || text.trim().length === 0) {
      throw new Error("Text is required");
    } else {
      const result = await axios.post("todos", { text, status: false });

      // if http status created
      if (result.status === 201) {
        return {
          status: true,
          data: result.data,
          message: "Todo added successfully",
        };
      } else {
        throw new Error("Something went wrong");
      }
    }
  } catch (error) {
    return {
      status: false,
      message: error.message,
      data: null,
    };
  }
};

const ChangeStatus = async (id: number, todoItem: ITodoItem) => {
  try {
    const result = await axios.put(`todos/${id}`, todoItem);

    // if http status ok
    if (result.status === 200) {
      return {
        status: true,
        data: result.data,
        message: "Todo status changed successfully",
      };
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    return {
      status: false,
      message: error.message,
      data: null,
    };
  }
};

const GetAll = async () => {
  try {
    const result = await axios.get("todos");

    // if http status ok
    if (result.status === 200) {
      return {
        status: true,
        data: result.data,
        message: "Todos fetched successfully",
      };
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    return {
      status: false,
      message: error.message,
      data: null,
    };
  }
};

const Delete = async (id: number) => {
  try {
    const result = await axios.delete(`todos/${id}`);

    // if http status ok
    if (result.status === 200) {
      return {
        status: true,
        data: result.data,
        message: "Todo deleted successfully",
      };
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    return {
      status: false,
      message: error.message,
      data: null,
    };
  }
};

const functions = { Add, GetAll, ChangeStatus, Delete };

export default functions;
