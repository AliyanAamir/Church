import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Live from "./Pages/Live";
import { useEffect } from "react";
import Contact from "./Pages/Contact";
import Signin from "./Pages/Signin";
import Signup from "./Components/Signup";
import Forgot_password from "./Pages/Forgot_password";
import Previous_streamings from "./Pages/Previous_streamings";
import Admin from "./Pages/Admin/Admin";
import BasicLayout from "./Layouts/BasicLayout";
import AdminLayout from "./Layouts/AdminLayout";
import Edit_users from "./Pages/Admin/Edit_users.jsx";
import UserList from "./Pages/Admin/UserList";
import Users from "./Pages/Admin/Users";
import UserLayout from "./Layouts/UserLayout";
import UsersDashbord from "./Pages/Users/UsersDashbord";
import LiveStream from "./Pages/Users/LiveStream";
import StreamingList from "./Pages/Users/StreamingList";
import EditUsers from "./Pages/Users/EditUsers";
import StreamShedule from "./Pages/Admin/StreamShedule";

import PreviewStream from "./Pages/PreviewStream";
import RegistrationComplete from "./Pages/RegistrationComplete";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes("admin")) {
      
      const script = document.createElement("script");
   
      script.src = `${window.location.origin}/admin.js`;

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    } else if (pathname.includes("users")) {
      const script2 = document.createElement("script");

      script2.src = `${window.location.origin}/admin.js`;

      document.body.appendChild(script2);
      return () => {
        document.body.removeChild(script2);
      };
    } else {
      const script3 = document.createElement("script");
      script3.src = `${window.location.origin}/main.js`;

      document.body.appendChild(script3);

      return () => {
        document.body.removeChild(script3);
      };
    }
  }, [pathname]);

  
  useEffect(() => {
    
    

      if (pathname.includes("admin")) {
        
      require("../src/Admin.css");
       require("../src/postmonkey.css");
     
      } else if (pathname.includes("users")) {
        
        require("../src/users.css");
         require("../src/postmonkey.css");
         
      } else {
        
     require("../src/App.css");
     
        
      }
     
 

   
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route element={<BasicLayout />} path="/">
          <Route element={<Home />} index />
          <Route
            element={<RegistrationComplete />}
            path="/registration-complete"
          />

          <Route element={<PreviewStream />} path="/PreviewStream" />
          <Route element={<Live />} path="/Live" />
          <Route element={<Contact />} path="/Contact" />
          <Route element={<Signin />} path="/Signin" />
          <Route element={<Signup />} path="/Signup" />
          <Route element={<Forgot_password />} path="/Forgot_password" />
          <Route
            element={<Previous_streamings />}
            path="/Previous_streamings"
          />
        </Route>

        {/* <Admins> */}

        <Route element={<AdminLayout />} path="/admin">
          <Route element={<Admin />} index />
          <Route element={<Edit_users />} path="/admin/Edit_user/:id" />
          <Route element={<UserList />} path="/admin/UserList" />
          <Route element={<StreamShedule />} path="/admin/stream-shedule" />
          <Route element={<Users />} path="/admin/User" />
        </Route>
        <Route element={<UserLayout />} path="/users">
          <Route element={<UsersDashbord />} index />
          <Route element={<LiveStream />} path="/users/live-stream" />
          <Route element={<StreamingList />} path="/users/streaming-list" />
          <Route element={<EditUsers />} path="/users/edit-users" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
