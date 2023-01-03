import "./App.css";

import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";

import { ReactDOM } from "react";

import Account from "./Pages/Account";
import AddTask from "./Pages/AddTask";
import Home from "./Pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Account",
      element: <Account />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
// <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Home />}></Route>
//     <Route path="/Account" element={<Account />}></Route>
//   </Routes>
// </BrowserRouter>
