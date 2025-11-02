import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import TVShows from "./pages/TVShows";
import Movies from "./pages/Movies";
import Explore from "./components/Explore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/tv-shows", element: <TVShows /> },
      { path: "/movies", element: <Movies /> },
      { path: "/explore/:mediaType/:category", element: <Explore /> },
    ],
  },
]);

export default router;
