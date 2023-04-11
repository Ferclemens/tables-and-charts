import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DisplayCharts from "../components/DisplayCharts.jsx";

const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/charts", element: <DisplayCharts/> },  
  ]);
export default router
  