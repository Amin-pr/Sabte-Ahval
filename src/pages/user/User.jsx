import styles from "./User.module.scss";

import TableComp from "../../ui/components/table/TableComp";
import { useState } from "react";
function User() {
	const rows = [
		{
			id: 1,
			// num: 1,
			// province: "تهران",
			// city: "تهران",
			// session: 305,
			// officeCode: 3.7,
			// score: 67,
			// rank: 4.3,
			status: "فعال",
			// location: "شسی",
		},
	];

	const headCells = [
		{
			id: "status",
			numeric: false,
			disablePadding: false,
			label: "وضعیت",
		},
	];
	const [users, setUsers] = useState();
	return (
		<div className={styles.holder}>
			<TableComp
				rows={rows}
				headCells={headCells}
			/>
		</div>
	);
}

export default User;
