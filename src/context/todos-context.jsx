import React, { createContext } from "react";

export const todosContext = createContext(null);

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = React.useState([]);

  return <todosContext.Provider value={{ todos, setTodos }}>{children}</todosContext.Provider>;
};

export default TodosProvider;
