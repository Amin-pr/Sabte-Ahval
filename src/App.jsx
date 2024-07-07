import Dashboard from "./pages/Dashboard/DashboardLayout";
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
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Dashboarditems from "./pages/Dashboard/Dashboard items/DashboardItems";
import FFtech from "../src/FFtech";
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

	const headCells = [
		{
			id: "status",
			numeric: false,
			disablePadding: false,
			label: "وضعیت",
		},
		{
			id: "location",
			numeric: false,
			disablePadding: false,
			label: "مکان",
		},
		{
			id: "rank",
			numeric: true,
			disablePadding: false,
			label: "رتبه",
		},
		{
			id: "score",
			numeric: true,
			disablePadding: false,
			label: "امتیاز",
		},
		{
			id: "officeCode",
			numeric: true,
			disablePadding: false,
			label: "کد دفتر",
		},
		{
			id: "session",
			numeric: true,
			disablePadding: false,
			label: "دوره",
		},
		{
			id: "city",
			numeric: false,
			disablePadding: false,
			label: "شهر",
		},
		{
			id: "province",
			numeric: false,
			disablePadding: true,
			label: "استان",
		},
		{
			id: "Num",
			numeric: true,
			disablePadding: true,
			label: "ردیف",
		},
	];

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
		{ path: "/Login", element: <SignInSide /> },
		{
			path: "/",
			element: <Dashboard />,
			children: [
				{
					path: "table",
					element: (
						<TableComp
							rows={rows}
							headCells={headCells}
						/>
					),
				},
				{
					path: "user managment",
					element: <User />,
				},
				{ path: "login", element: <SignInSide /> },
				{ path: "dashboard", element: <Dashboarditems /> },
				// { path: "dashboard", element: <FFtech /> },
			],
		},
	]);


	
	console.log(theme);
	const queryClient = new QueryClient();

	return (
		<div className="app">
			<ToastContainer />
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
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
