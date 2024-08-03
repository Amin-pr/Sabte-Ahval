import { lazy, Suspense } from "react";
import "./app.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";
import theme from "./ui/theme/theme";
const SignInSide = lazy(() => import("./pages/login/LoginPage"));
const Dashboard = lazy(() => import("./pages/Dashboard/DashboardLayout"));
const DataTable = lazy(() => import("./ui/components/table/DataGrid"));
const User = lazy(() => import("./pages/user/User"));
const Dashboarditems = lazy(() =>
	import("./pages/Dashboard/Dashboard items/DashboardItems")
);
import "react-toastify/dist/ReactToastify.css";
import Loading from "./ui/components/loading/Loading";
function App() {
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
			// type: "number",
			width: 110,
			editable: true,
		},
		{
			field: "officeCode",
			headerName: "کد دفتر",
			// type: "number",
			width: 110,
			editable: true,
		},
		{
			field: "session",
			headerName: "دوره",
			// type: "number",
			width: 110,
			editable: true,
		},
		{
			field: "city",
			headerName: "شهر",
			// type: "number",
			width: 110,
			editable: true,
		},
		{
			field: "province",
			headerName: "استان",
			// type: "number",
			width: 110,
			editable: true,
		},
		{
			field: "Num",
			headerName: "ردیف",
			// type: "number",
			width: 110,
			editable: true,
		},
	];

	const downloadCols = columns?.map((column) => column).reverse();
	console.log(downloadCols);
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
			session: 30,
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
			session: 303,
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
			session: 302,
			officeCode: 3.7,
			score: 67,
			rank: 4.3,
			status: "فعال",
			location: "شسی",
		},
	];

	console.log(theme);
	const queryClient = new QueryClient();

	return (
		<div className="app">
			<ToastContainer />
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<ThemeProvider theme={theme}>
					<HashRouter>
						<Routes>
							<Route
								path="login"
								element={
									<Suspense fallback={<Loading text={"لطفا صبر نمایید..."} />}>
										<SignInSide />
									</Suspense>
								}
							/>
							<Route
								path="/"
								element={
									<Suspense fallback={<Loading text={"لطفا صبر نمایید..."} />}>
										<Dashboard />
									</Suspense>
								}
							>
								<Route
									path="/table"
									element={
										<Suspense
											fallback={<Loading text={"لطفا صبر نمایید..."} />}
										>
											<DataTable
												columns={columns}
												rows={rows}
												exportAbility
											/>
										</Suspense>
									}
								/>
								<Route
									path="/userManagment"
									element={
										<Suspense
											fallback={<Loading text={"لطفا صبر نمایید..."} />}
										>
											<User />
										</Suspense>
									}
								/>
								<Route
									path="/dashboard"
									element={
										<Suspense
											fallback={<Loading text={"لطفا صبر نمایید..."} />}
										>
											<Dashboarditems />
										</Suspense>
									}
								/>
							</Route>
						</Routes>
					</HashRouter>
				</ThemeProvider>
			</QueryClientProvider>
		</div>
	);
}

export default App;
