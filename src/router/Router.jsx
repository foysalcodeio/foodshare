import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../components/navbar/home/Home";
import About from "../components/navbar/about/About";

const Router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/about',
                    element : <About />
                }
            ]
        }
    ],
    {
        future: {
            v7_partialHydration: true,            // Enables partial hydration for SSR
            v7_startTransition: true,             // Wraps state updates in React.startTransition
            v7_relativeSplatPath: true,           // Changes behavior for relative paths in splat routes
            v7_fetcherPersist: true,              // Changes fetcher persistence behavior
            v7_normalizeFormMethod: true,         // Normalizes `formMethod` to uppercase
            v7_skipActionErrorRevalidation: true, // Skips revalidation for action 4xx/5xx responses
          },
    }
);

export default Router;
