import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function AppMini() {
  return (
    <UserContextProvider>
      <h1 className="bg-slate-500 text-sky-500">contaxt API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default AppMini;
