import Dashboard from "./pages/Dashboard/Dashboard";
import "./app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TableComp from "./ui/components/table/TableComp";
import User from "./pages/user/User";
import SignInSide from "./pages/login/LoginPage";
import { ThemeProvider } from "@emotion/react";
import theme from "./ui/theme/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
	function createData(
		id,
		num,
		province,
		city,
		rank,
		score,
		officeCode,
		session,
		location,
		status
	) {
		return {
			id,
			num,
			province,
			city,
			rank,
			score,
			officeCode,
			session,
			location,
			status,
		};
	}

	const rows = [
		{
			id: 1,
			num: 1,
			province: "تهران",
			city: "تهران",
			session: 305,
			officeCode: 3.7,
			score: 67,
			rank: 4.3,
			status: "فعال",
			location: "شسی",
		},
		{
			id: 1,
			num: 1,
			province: "تهران",
			city: "تهران",
			session: 305,
			officeCode: 3.7,
			score: 67,
			rank: 4.3,
			status: "فعال",
			location: "شسی",
		},
		{
			id: 1,
			num: 1,
			province: "تهران",
			city: "تهران",
			session: 305,
			officeCode: 3.7,
			score: 67,
			rank: 4.3,
			status: "فعال",
			location: "شسی",
		},
		{
			id: 1,
			num: 1,
			province: "تهران",
			city: "تهران",
			session: 305,
			officeCode: 3.7,
			score: 67,
			rank: 4.3,
			status: "فعال",
			location: "شسی",
		},
		{
			id: 1,
			num: 1,
			province: "تهران",
			city: "تهران",
			session: 305,
			officeCode: 3.7,
			score: 67,
			rank: 4.3,
			status: "فعال",
			location: "شسی",
		},
		{
			id: 1,
			num: 1,
			province: "تهران",
			city: "تهران",
			session: 305,
			officeCode: 3.7,
			score: 67,
			rank: 4.3,
			status: "فعال",
			location: "شسی",
		},
		{
			id: 1,
			num: 1,
			province: "تهران",
			city: "تهران",
			session: 305,
			officeCode: 3.7,
			score: 67,
			rank: 4.3,
			status: "فعال",
			location: "شسی",
		},
		{
			id: 1,
			num: 1,
			province: "تهران",
			city: "تهران",
			session: 305,
			officeCode: 3.7,
			score: 67,
			rank: 4.3,
			status: "فعال",
			location: "شسی",
		},
		{
			id: 1,
			num: 1,
			province: "تهران",
			city: "تهران",
			session: 305,
			officeCode: 3.7,
			score: 67,
			rank: 4.3,
			status: "فعال",
			location: "شسی",
		},
		{
			id: 1,
			num: 1,
			province: "تهران",
			city: "تهران",
			session: 305,
			officeCode: 3.7,
			score: 67,
			rank: 4.3,
			status: "فعال",
			location: "شسی",
		},
		{
			id: 1,
			num: 1,
			province: "تهران",
			city: "تهران",
			session: 305,
			officeCode: 3.7,
			score: 67,
			rank: 4.3,
			status: "فعال",
			location: "شسی",
		},
		{
			id: 1,
			num: 1,
			province: "تهران",
			city: "تهران",
			session: 305,
			officeCode: 3.7,
			score: 67,
			rank: 4.3,
			status: "فعال",
			location: "شسی",
		},
		{
			id: 1,
			num: 1,
			province: "تهران",
			city: "تهران",
			session: 305,
			officeCode: 3.7,
			score: 67,
			rank: 4.3,
			status: "فعال",
			location: "شسی",
		},
		{
			id: 1,
			num: 1,
			province: "تهران",
			city: "تهران",
			session: 305,
			officeCode: 3.7,
			score: 67,
			rank: 4.3,
			status: "فعال",
			location: "شسی",
		},
		{
			id: 1,
			num: 1,
			province: "تهران",
			city: "تهران",
			session: 305,
			officeCode: 3.7,
			score: 67,
			rank: 4.3,
			status: "فعال",
			location: "شسی",
		},
		{
			id: 1,
			num: 1,
			province: "تهران",
			city: "تهران",
			session: 305,
			officeCode: 3.7,
			score: 67,
			rank: 4.3,
			status: "فعال",
			location: "شسی",
		},
		{
			id: 1,
			num: 1,
			province: "تهران",
			city: "تهران",
			session: 305,
			officeCode: 3.7,
			score: 67,
			rank: 4.3,
			status: "فعال",
			location: "شسی",
		},
		{
			id: 1,
			num: 1,
			province: "تهران",
			city: "تهران",
			session: 305,
			officeCode: 3.7,
			score: 67,
			rank: 4.3,
			status: "فعال",
			location: "شسی",
		},
		{
			id: 1,
			num: 1,
			province: "تهران",
			city: "تهران",
			session: 305,
			officeCode: 3.7,
			score: 67,
			rank: 4.3,
			status: "فعال",
			location: "شسی",
		},
		{
			id: 1,
			num: 1,
			province: "تهران",
			city: "تهران",
			session: 305,
			officeCode: 3.7,
			score: 67,
			rank: 4.3,
			status: "فعال",
			location: "شسی",
		},
	];

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Dashboard />,
			children: [
				{
					path: "table",
					element: <TableComp rows={rows} />,
				},
				{
					path: "user management",
					element: <User />,
				},
				{ path: "login", element: <SignInSide /> },
			],
		},
	]);
	console.log(theme);
	const queryClient = new QueryClient();

	return (
		<div className="app">
			<ToastContainer />
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router}>
					<ThemeProvider theme={theme}>
						<Dashboard />
					</ThemeProvider>
				</RouterProvider>
			</QueryClientProvider>
		</div>
	);
}

export default App;
