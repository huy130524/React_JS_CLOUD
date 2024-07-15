
import './App.css';
import { useRoutes } from "react-router-dom";
import "./App.css";
import Homepage from './page/Homepage';
import Header from './compoment/header';
import Viewhome from './layout/Viewhome';

import Homeadmin from './page/Homeadmin';
import Listproduct from './compoment/Listproduct';
import Editproduct from './compoment/Editproduct';
import AddProduct from './compoment/Addproduct';

function App() {
  const element = useRoutes([


    {
      path: "admin",
      element: <Homeadmin />,
      children:
        [
          
          { path: "",
            element: <Listproduct /> 
           },
           {
            path: "edit/:id",
            element: <Editproduct />,
          },
          {
            path: "add",
            element: <AddProduct />,
          },
        ],
    },
    {
      path: "/",
      element: <Viewhome />,
      children:
      [
        { path: "",
         element: <Homepage /> 
        },
      ],
    },

    {
      path: "/regitter",
      element: <Header />,
    },
     {
      path: "/login",
      element: <Header />,
    },

    {
      path: "/login",
      element: <Header />,
    },



  ]);
  return element;
}

export default App;
