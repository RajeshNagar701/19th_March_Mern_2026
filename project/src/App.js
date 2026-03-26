import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./website/pages/Home";
import Add_user from "./website/pages/Add_user";
import Manage_user from "./website/pages/Manage_user";
import Manage_contact from "./website/pages/Manage_contact";
import Edit_user from "./website/pages/Edit_user";
import Login from "./website/pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          {
            // Website Routes
          }
          <Route path="/" element={<Login/>}></Route>
          <Route path="/dashboard" element={<Home/>}></Route>
          <Route path="/add_user" element={<Add_user/>}></Route>
          <Route path="/manage_user" element={<Manage_user/>}></Route>
          <Route path="/manage_contact" element={<Manage_contact/>}></Route>
          <Route path="/edit_user/:id" element={<Edit_user/>}></Route>

          
          {
            // Admin Routes
          }  

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
