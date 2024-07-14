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
import DataTable from "./ui/components/table/DataGrid";
// import rows from '../src/rows'
// import rows from "./rows";
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

	// const headCells = [
	// 	{
	// 		id: "status",
	// 		numeric: false,
	// 		disablePadding: false,
	// 		label: "وضعیت",
	// 	},
	// 	{
	// 		id: "location",
	// 		numeric: false,
	// 		disablePadding: false,
	// 		label: "مکان",
	// 	},
	// 	{
	// 		id: "rank",
	// 		numeric: true,
	// 		disablePadding: false,
	// 		label: "رتبه",
	// 	},
	// 	{
	// 		id: "score",
	// 		numeric: true,
	// 		disablePadding: false,
	// 		label: "امتیاز",
	// 	},
	// 	{
	// 		id: "officeCode",
	// 		numeric: true,
	// 		disablePadding: false,
	// 		label: "کد دفتر",
	// 	},
	// 	{
	// 		id: "session",
	// 		numeric: true,
	// 		disablePadding: false,
	// 		label: "دوره",
	// 	},
	// 	{
	// 		id: "city",
	// 		numeric: false,
	// 		disablePadding: false,
	// 		label: "شهر",
	// 	},
	// 	{
	// 		id: "province",
	// 		numeric: false,
	// 		disablePadding: true,
	// 		label: "استان",
	// 	},
	// 	{
	// 		id: "Num",
	// 		numeric: true,
	// 		disablePadding: true,
	// 		label: "ردیف",
	// 	},
	// ];

	const columns = [
		{ field: "status", headerName: "وضعیت", width: 150 },
		{
			field: "location",
			headerName: "مکان",
			width: 150,
			editable: true,
		},
		{
			field: "rank",
			headerName: "رتبه",
			width: 150,
			editable: true,
		},
		{
			field: "score",
			headerName: "امتیاز",
			type: "number",
			width: 110,
			editable: true,
		},
		{
			field: "officeCode",
			headerName: "کد دفتر",
			type: "number",
			width: 110,
			editable: true,
		},
		{
			field: "session",
			headerName: "دوره",
			type: "number",
			width: 110,
			editable: true,
		},
		{
			field: "city",
			headerName: "شهر",
			type: "number",
			width: 110,
			editable: true,
		},
		{
			field: "province",
			headerName: "استان",
			type: "number",
			width: 110,
			editable: true,
		},
		{
			field: "Num",
			headerName: "ردیف",
			type: "number",
			width: 110,
			editable: true,
		},
	];

	const rows = [
		{
			id: 1,

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
			id: 2,

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
			id: 3,

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
			id: 4,

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
	// 	{
	// 		id: 5,
	// 		num: 1,
	// 		province: "تهران",
	// 		city: "تهران",
	// 		session: 305,
	// 		officeCode: 3.7,
	// 		score: 67,
	// 		rank: 4.3,
	// 		status: "فعال",
	// 		location: "شسی",
	// 	},
	// 	{
	// 		id: 6,
	// 		num: 1,
	// 		province: "تهران",
	// 		city: "تهران",
	// 		session: 305,
	// 		officeCode: 3.7,
	// 		score: 67,
	// 		rank: 4.3,
	// 		status: "فعال",
	// 		location: "شسی",
	// 	},
	// 	{
	// 		id: 7,
	// 		num: 1,
	// 		province: "تهران",
	// 		city: "تهران",
	// 		session: 305,
	// 		officeCode: 3.7,
	// 		score: 67,
	// 		rank: 4.3,
	// 		status: "فعال",
	// 		location: "شسی",
	// 	},
	// 	{
	// 		id: 8,
	// 		num: 1,
	// 		province: "تهران",
	// 		city: "تهران",
	// 		session: 305,
	// 		officeCode: 3.7,
	// 		score: 67,
	// 		rank: 4.3,
	// 		status: "فعال",
	// 		location: "شسی",
	// 	},
	// 	{
	// 		id: 9,
	// 		num: 1,
	// 		province: "تهران",
	// 		city: "تهران",
	// 		session: 305,
	// 		officeCode: 3.7,
	// 		score: 67,
	// 		rank: 4.3,
	// 		status: "فعال",
	// 		location: "شسی",
	// 	},
	// 	{
	// 		id: 10,
	// 		num: 1,
	// 		province: "تهران",
	// 		city: "تهران",
	// 		session: 305,
	// 		officeCode: 3.7,
	// 		score: 67,
	// 		rank: 4.3,
	// 		status: "فعال",
	// 		location: "شسی",
	// 	},
	// 	{
	// 		id: 11,
	// 		num: 1,
	// 		province: "تهران",
	// 		city: "تهران",
	// 		session: 305,
	// 		officeCode: 3.7,
	// 		score: 67,
	// 		rank: 4.3,
	// 		status: "فعال",
	// 		location: "شسی",
	// 	},
	// 	{
	// 		id: 12,
	// 		num: 1,
	// 		province: "تهران",
	// 		city: "تهران",
	// 		session: 305,
	// 		officeCode: 3.7,
	// 		score: 67,
	// 		rank: 4.3,
	// 		status: "فعال",
	// 		location: "شسی",
	// 	},
	// 	{
	// 		id: 13,
	// 		num: 1,
	// 		province: "تهران",
	// 		city: "تهران",
	// 		session: 305,
	// 		officeCode: 3.7,
	// 		score: 67,
	// 		rank: 4.3,
	// 		status: "فعال",
	// 		location: "شسی",
	// 	},
	// 	{
	// 		id: 14,
	// 		num: 1,
	// 		province: "تهران",
	// 		city: "تهران",
	// 		session: 305,
	// 		officeCode: 3.7,
	// 		score: 67,
	// 		rank: 4.3,
	// 		status: "فعال",
	// 		location: "شسی",
	// 	},
	//
	// ];

	const router = createBrowserRouter([
		{ path: "/Login", element: <SignInSide /> },
		{
			path: "/",
			element: <Dashboard />,
			children: [
				{
					path: "table",
					element: (
						<DataTable
							columns={columns}
							rows={rows}
						/>
					),
				},
				{
					path: "user managment",
					element: <User />,
				},
				{ path: "login", element: <SignInSide /> },
				{ path: "dashboard/:token", element: <Dashboarditems /> },
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
