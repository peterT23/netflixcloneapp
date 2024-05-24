import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NetFlix from "./pages/NetFlix";
import ErrorPage from "./pages/ErrorPage";

import SignUpPage from "./pages/SignUpPage";

import { AuthProvider } from "./contexts/AuthContext";
import AuthRequire from "./routes/AuthRequire";

import MovieDetailPage from "./pages/MovieDetailPage";
import Player from "./pages/Player";
import SearchPage from "./pages/SearchPage";
import Layout from "./layout/Layout";
import { loader as searchLoader } from "./pages/SearchPage";
import VideoDisplay from "./layout/VideoDisplay";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthRequire>
        <Layout />
      </AuthRequire>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <NetFlix />,

        children: [
          {
            path: "movies/:id",
            element: <MovieDetailPage />,
          },
        ],
      },

      {
        path: "/search",
        element: <SearchPage />,

        loader: searchLoader,
        children: [
          {
            path: "movies/:id",
            element: <MovieDetailPage />,
          },
        ],
      },
      {
        path: "movies/:id/trailer",
        element: <Player />,
      },
      {
        path: "/video",
        element: <VideoDisplay />,
      },
    ],
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
]);
function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
