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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthRequire>
        <NetFlix />
      </AuthRequire>
    ),
    errorElement: <ErrorPage />,
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
