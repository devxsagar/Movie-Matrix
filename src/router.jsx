import { lazy, Suspense } from "react";
import { createBrowserRouter} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import HomeSkeleton from "./components/skeleton/HomeSkeleton";
import MyListSkeleton from "./components/skeleton/MyListSkeleton";
import App from "./App";

// const App = lazy(() => import("./App"));
const Home = lazy(() => import("./pages/Home"));
const TVShows = lazy(() => import("./pages/TVShows"));
const Movies = lazy(() => import("./pages/Movies"));
const Explore = lazy(() => import("./components/Explore"));
const Details = lazy(() => import("./pages/Details"));
const MyList = lazy(() => import("./pages/MyList"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<HomeSkeleton />}>
            <Home />
          </Suspense>
        ),
      },

      {
        path: "/tv-shows",
        element: (
          <Suspense fallback={<HomeSkeleton />}>
            <TVShows />
          </Suspense>
        ),
      },

      {
        path: "/movies",
        element: (
          <Suspense fallback={<HomeSkeleton />}>
            <Movies />
          </Suspense>
        ),
      },

      {
        path: "/explore/:mediaType/:category",
        element: (
          <Suspense fallback={<HomeSkeleton />}>
            <Explore />
          </Suspense>
        ),
      },

      {
        path: "/details/:mediaType/:title/:id",
        element: (
          <Suspense fallback={<HomeSkeleton />}>
            <Details />
          </Suspense>
        ),
      },

      {
        path: "/my-list",
        element: (
          <Suspense fallback={<MyListSkeleton />}>
            <MyList />
          </Suspense>
        ),
      },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

export default router;
