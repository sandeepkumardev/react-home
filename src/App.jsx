import "./App.css";
import Notes from "./apps/notes/Notes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AuthProvider from "./context/auth-context";
import Todos from "./apps/todos/Todos";
import TodosProvider from "./context/todos-context";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TodosProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/todos" element={<Todos />} />

            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </TodosProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
