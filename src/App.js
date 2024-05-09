import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NetFlix from "./pages/NetFlix";
import ErrorPage from "./pages/ErrorPage";
import Player from "./pages/Player";
import TvShow from "./pages/TvShow";
import MoviePage from "./pages/MoviePage";
import SignUpPage from "./pages/SignUpPage";

import Header from "./layout/Header";
import { AuthProvider } from "./contexts/AuthContext";
import AuthRequire from "./routes/AuthRequire";
import Footer from "./layout/Footer";
import SimpleSlider from "./layout/Slider";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthRequire>
        <NetFlix />
      </AuthRequire>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/player",
    element: <Player />,
  },
  {
    path: "/tvshow",
    element: <TvShow />,
  },
  {
    path: "/movie",
    element: <MoviePage />,
  },

  {
    path: "/header",
    element: <Header />,
  },
  {
    path: "/footer",
    element: <Footer />,
  },
  {
    path: "/slider",
    element: <SimpleSlider />,
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
