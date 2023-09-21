import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./pages/App/App.tsx";

import "./index.scss";
import "./assets/colors.scss";
import "./assets/fonts/fonts.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
