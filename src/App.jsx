import Dashboard from "./pages/Dashboard/Dashboard";
import "./app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TableComp from "./ui/components/table/TableComp";

function App() {
	const router = createBrowserRouter([
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
	]);

	return (
		<div className="app">
			<RouterProvider router={router}>
				<Dashboard />
			</RouterProvider>
		</div>
	);
}

export default App;
