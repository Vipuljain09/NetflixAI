import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import ErrorPage from "./components/ErrorPage";
import Browse from "./components/browse/Browse";
import AISearchPage from "./components/AISearchPage";
import Header from "./components/Header";
import Layout from "./utils/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Navigate to='/home' replace/>
    },
    {
      path: "/login",
      element:<Layout><SignIn /></Layout> ,
    },
    {
      path:'/home',
      element:<Layout><Home/></Layout>
    },
    {
      path:'/browse',
      element:<Layout><Browse/></Layout>

    },
    {
      path:'/browse/ai',
      element:<Layout><AISearchPage/></Layout>
      
    },
    {
      path:'*',
      element:<ErrorPage/>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
