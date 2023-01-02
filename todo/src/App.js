import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from "./Pages/Account";
import AddTask from "./Pages/AddTask";
import Home from "./Pages/Home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="AddTask" element={<AddTask />} />
          <Route path="Account" element={<Account />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
