import styles from "./User.module.scss";

import TableComp from "../../ui/components/table/TableComp";
import { useEffect, useState } from "react";
import DataTable from "../../ui/components/table/DataGrid";
import CreateUserForm from "../../ui/components/createUserForm/CreatUserForm";
import UseGetUser from "../../hooks/UseGetUser";
import { Button } from "@mui/material";
import Loading from "../../ui/components/loading/Loading";
import { DeleteOutline } from "@mui/icons-material";
import UseDeleteUser from "../../hooks/UseDeleteUser";
import { useQueryClient } from "@tanstack/react-query";
import RowButtonGroup from "../../ui/components/table/buttongroup/ButtonGroup";

import { toast } from "react-toastify";
function User() {
	const QueryClient = useQueryClient();

	const {
		DeleteUser,
		data: DeleteData,
		isLoading: DeleteIsLoading,
	} = UseDeleteUser();

	const {
		error: getUserError,
		data: getUserData,
		isPending: getUserIsLoading,
	} = UseGetUser();

	//error
	useEffect(() => {
		toast.error(getUserError && `خطایی رخ داده`);
	}, [getUserError]);

	useEffect(() => {
		if (DeleteData?.success === true) {
			QueryClient.resetQueries(["users"]);
		}
	}, [DeleteData?.success, QueryClient]);

	//دیتای یوزرها
	const users = getUserData?.data?.users?.data;
	console.log(users);
	function handleDeleteUser(id) {
		DeleteUser(id);
	}

	function handleEditUser(id) {
		console.log(id);
	}
	// سربرگ ستون ها
	const headCells = [
		{ field: "id", headerName: "شناسه", width: 120 },
		{
			field: "name",
			headerName: "نام",
			width: 200,
			// editable: false,
		},
		{
			field: "username",
			headerName: "نام کاربری",
			width: 200,
			// editable: true,
		},
		{
			field: "phone_number",
			headerName: "تلفن",
			width: 200,
			// editable: true,
		},
		{
			field: "role",
			headerName: "سطح دسترسی",
			width: 200,
			// editable: true,
		},
		{
			field: "edits",
			headerName: "تغییرات",
			width: 300,

			renderCell: (params) => (
				<RowButtonGroup
					variant="contained"
					color="primary"
					params={params}
					deleteUser={handleDeleteUser}
					editUser={handleEditUser}
				></RowButtonGroup>
			),
		},
	];

	return (
		<div className={styles.holder}>
			{(getUserIsLoading || DeleteIsLoading) && (
				<Loading text={"لطفا صبر نمایید..."} />
			)}
			<CreateUserForm />

			<DataTable
				rows={users}
				columns={headCells}
			/>
		</div>
	);
}

export default User;
