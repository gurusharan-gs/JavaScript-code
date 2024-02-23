import { useState } from "react";

import "./App.css";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1 className="bg-slate-500 text-sky-500">contaxt API</h1>
    </UserContextProvider>
  );
}

export default App;
