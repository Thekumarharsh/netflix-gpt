import {createBrowserRouter} from "react-router-dom";
import Browse from './Browse'
import Login from './Login'
import {RouterProvider} from "react-router-dom";
const Body = () => {

    const appRouter= createBrowserRouter([
        {
            path: "/",
            element: <Login />,
           // key: 'login',
        },
        {
            path: "/browse",
            element: <Browse />,
            // key: 'browse',
        },
    ]);

  return (
    <div>
        <RouterProvider router={appRouter}/>
        
    </div>
  )
}

export default Body