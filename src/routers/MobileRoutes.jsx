import {createBrowserRouter} from "react-router-dom"
import App from "../App.jsx";
import About from "../pages/Mobile/About.jsx";
import Contact from "../pages/Mobile/Contact.jsx";
import Home from "../pages/Mobile/Home.jsx";
import Checkout from "../pages/Checkout.jsx";
import Courses from "../pages/Courses.jsx";
import Events from "../pages/Mobile/Events.jsx";

const mobileRouter = createBrowserRouter([
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

export default mobileRouter;