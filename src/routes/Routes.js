import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import TableComp from "../ui/components/table/TableComp";

const routeDefinitions = [
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "table",
        element: <TableComp />,
      },
    ],
  },
];

const router = createBrowserRouter(routeDefinitions);

export default router;