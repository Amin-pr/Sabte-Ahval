import { lazy, Suspense, useEffect } from "react";
import "./app.scss";
import {
	HashRouter,
	Navigate,
	Route,
	Routes,
	useNavigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
	QueryClient,
	QueryClientProvider,
	useQueryClient,
} from "@tanstack/react-query";
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
import { ProtectedRoute } from "./ui/components/protect route/protectRoute";
function App() {
	// const queryClient = useQueryClient();
	// const

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
			width: 110,
			editable: true,
		},
		{
			field: "officeCode",
			headerName: "کد دفتر",
			width: 110,
			editable: true,
		},
		{
			field: "session",
			headerName: "دوره",
			width: 110,
			editable: true,
		},
		{
			field: "city",
			headerName: "شهر",
			width: 110,
			editable: true,
		},
		{
			field: "province",
			headerName: "استان",
			width: 110,
			editable: true,
		},
		{
			field: "Num",
			headerName: "ردیف",

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
									<ProtectedRoute>
										<Dashboard />
									</ProtectedRoute>
								}
							>
								<Route
									path="/table"
									element={
										<ProtectedRoute>
											<DataTable
												columns={columns}
												rows={rows}
												exportAbility
											/>
										</ProtectedRoute>
									}
								/>
								<Route
									path="/userManagment"
									element={
										<ProtectedRoute>
											<User />
										</ProtectedRoute>
									}
								/>
								<Route
									path="/dashboard"
									element={
										<ProtectedRoute>
											<Dashboarditems />
										</ProtectedRoute>
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
