
import React, { use } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Dashboard from './pages/Admin/Dashboard';
import CreateTask from './pages/Admin/CreateTask';
import ManageUser from './pages/Admin/ManageUser';
import ManageTasks from './pages/Admin/ManageTasks';
import UserDashboard from './pages/User/UserDashboard';
import MyTasks from './pages/User/MyTasks';
import ViewTaskDetails from './pages/User/ViewTaskDetails';
import PrivateRoute from './routes/PrivateRoute';
import "./index.css";
import UserProvider, {UserContext} from './context/userContext';



const App = () => {
  return (
     <UserProvider>  
    <div>
    
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* Admin Routes */}
          <Route element={<PrivateRoute allowedRoles={['admin']} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/create-task" element={<CreateTask />} />
            <Route path="/admin/manage-users" element={<ManageUser />} />
            <Route path="/admin/manage-tasks" element={<ManageTasks />} />
          </Route>

           {/* User Routes */}
          <Route element={<PrivateRoute allowedRoles={['user']} />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/task" element={<MyTasks />} />
            <Route path="/user/task-details/:id" element={<ViewTaskDetails />} />
          </Route>

          {/* Default Route */}
          <Route path="/" element={<Root/>} />
        </Routes>
      </Router>
    
    </div>
   </UserProvider>
  )
}

export default App;

const Root = () => {
  const {user, loading} = useContext(UserContext);

  if(loading) return <Outlet />

  if(!user){
    return <Navigate to="/login" />;

  }
   return user.role === 'admin' ? <Navigate to="/admin/dashboard" /> : <Navigate to="/user/dashboard" />;  

};