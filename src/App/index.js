import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

function App() {
  return (
    /* Pasamos los valores de loading y error */
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
