import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./feature/admin/pages/Login";
import Home from "./feature/admin/pages/Home";
import Add_user from "./feature/admin/pages/Add_user";
import Manage_user from "./feature/admin/pages/Manage_user";
import Manage_contact from "./feature/admin/pages/Manage_contact";
import Edit_user from "./feature/admin/pages/Edit_user";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>


          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Home />}></Route>
          <Route path="/add_user" element={<Add_user />}></Route>
          <Route path="/manage_user" element={<Manage_user />}></Route>
          <Route path="/manage_contact" element={<Manage_contact />}></Route>
          <Route path="/edit_user/:id" element={<Edit_user />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
