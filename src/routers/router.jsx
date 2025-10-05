import {createBrowserRouter} from "react-router-dom"
import App from "../App.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Home from "../pages/Home.jsx";
import Checkout from "../pages/Checkout.jsx";
import Courses from "../pages/Courses.jsx";
import Events from "../pages/Events.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/courses",
                element: <Courses/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/events",
                element: <Events/>
            },             {
                path: "/checkout",
                element: <Checkout/>
            },
        ]
    },
])

export default router;