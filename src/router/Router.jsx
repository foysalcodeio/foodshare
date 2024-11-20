import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../components/navbar/home/Home";

const Router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root />,
            children: [
                {
                    path: '/',
                    element: <Home />
                }
            ]
        }
    ],
    {
        future: {
            v7_skipActionErrorRevalidation: true, // Opt-in to the new v7 behavior
        }
    }
);

export default Router;
