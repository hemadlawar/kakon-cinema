import Header from "./header/header";
import Main from "./components/Main";
import Login from "./components/login";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/lg" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
