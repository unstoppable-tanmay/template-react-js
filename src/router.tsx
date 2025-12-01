import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about";
import App from "./pages/app";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
