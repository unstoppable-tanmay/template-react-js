import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <div className="p-4">About Page</div> },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
