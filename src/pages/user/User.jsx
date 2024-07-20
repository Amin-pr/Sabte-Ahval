import styles from "./User.module.scss";

import TableComp from "../../ui/components/table/TableComp";
import { useState } from "react";
import DataTable from "../../ui/components/table/DataGrid";
import CreateUserForm from "../../ui/components/createUserForm/CreatUserForm";
import UseGetUser from "../../hooks/UseGetUser";
import { Button } from "@mui/material";
function User() {
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
	];
	const headCells = [
		{
			field: "name",
			headerName: "نام",
			width: 200,
			// editable: false,
		},
		{
			field: "userName",
			headerName: "نام کاربری",
			width: 200,
			// editable: true,
		},
		{
			field: "phone",
			headerName: "تلفن",
			width: 200,
			// editable: true,
		},
		{
			field: "ref_if",
			headerName: "سطح دسترسی",
			width: 200,
			// editable: true,
		},
	];
	const [users, setUsers] = useState();

	const {  GetUser } = UseGetUser();
	console.log(GetUser);
	return (
		<div className={styles.holder}>
			<Button
				onClick={() => GetUser()}
				color="primary"
			>asda</Button>
			<DataTable
				rows={rows}
				columns={headCells}
			/>
			<CreateUserForm />
		</div>
	);
}

export default User;
