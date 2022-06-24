import axios from "axios";
import { IGetAllProps, IUpdateProps, IStatusProps } from "./types";

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

const functions = { Add };

export default functions;
