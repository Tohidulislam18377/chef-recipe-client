import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import TermsCondition from "../pages/TermsCondition/TermsCondition";
import PrivateRouter from "./PrivateRouter";
import Contact from "../pages/Contact/Contact";
import Footer from "../shred/Footer/Footer";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'singUp',
                element: <SingUp />
            },
            {
                path: 'viewDetails/:id',
                element: <PrivateRouter><ViewDetails></ViewDetails></PrivateRouter>,
                loader: ({ params }) => fetch(`https://chef-master-server-two.vercel.app/chef/${params.id}`)
            },
            {
                path: 'terms',
                element: <TermsCondition />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'footer',
                element: <Footer />
            }
        ]
    }
]);

export default router;