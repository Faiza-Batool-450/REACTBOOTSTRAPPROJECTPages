import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import ResourceCenter from './/Components/Pages/Resourcecenter';
import Navbar from './Components/Frontend/Navbar';
import Footer from './Components/Frontend/Footer';
import Notification from  './Components/Pages/Notification';
import Button from 'react-bootstrap/esm/Button';
import Dashboard from './Components/Pages/Dashboard';
import Task from './Components/Pages/Task';
import TaskList from './Components/Pages/Progresss/Tasklist';
import Progress from './Components/Pages/Progress';
import TaaskList from './Components/Pages/Plan/TaaskList';
import Mood from './Components/Pages/Mood';
import Location from './Components/Pages/Location';
import Healthmontorning from './Components/Pages/Healthmontorning';
import Appointment from './Components/Pages/Appointment';
import Sosbutton from './Components/Pages/Sosbutton';
import Work from './Components/Pages/Work';


const router = createBrowserRouter([
  {
    path:"/",
    element:
    <div>
      <Navbar/>
      <Home/>
    </div>
    ,
  },
  
   {
    path:"/login",
    element:<div>
      <Navbar/>
      <Login/>
    </div>,
   
  
  },
   {
    path:"/resourcecenter",
    element:<div>
      <Navbar/>
      <ResourceCenter/>
    </div>,
},
{
    path:"/footer",
    element:<div>
      <Navbar/>
      <Footer/>
    </div>,
},
{
    path:"/notification",
    element:<div>
      <Notification/>
    </div>,
    
},
{
  path:"/sos",
  element:<div>
  <Navbar/>
  <Sosbutton/>
  </div>,
},
{
    path:"/button",
    element:<div>
      <Navbar/>
      <Button/>
    </div>,
  },
{
    path:"/dashbord",
    element: <Dashboard/>,
},

{
   path:"/task",
    element:<div>
      <Task/>
    </div>,
    children:[
      {
        path:"taasklist",
        element:<TaaskList/>,
      },
    ]
},

{
   path:"/progress",
    element:<div>
      <Progress/>
    </div>,
    children:[
      {
        path:"tasklist",
        element:<TaskList/>,
      },
    ]
},
{
  path:"/mood",
  element: <Mood/>,
},
{
  path:"/location",
  element:<Location/>
},
{
  path:"/healthmontorning",
  element:<Healthmontorning/>
},
{
  path:"/calender",
  element:<Appointment/>
},
{
  path:"/work",
  element:<Work/>
},
{
  path:"/notification",
  element:<Notification/>
},

])

const App = () => {
  
  return (
    <div>
      <RouterProvider router={router}/> 
      </div>

  
     
  )
}

export default App


