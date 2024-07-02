import React from "react";
import { downloadExcel } from "react-export-table-to-excel";

// eslint-disable-next-line react/prop-types
const Test = ({data}) => {
	const header = [
		"id",
		"num",
		"province",
		"city",
		"rank",
		"score",
		"officeCode",
		"session",
		"location",
		"status",
	];
	const body = [
		[1, 1, "تهران", "تهران", 305, 3.7, 67, 4.3, "فعال", "شسی"],
		["Cheila", "Rodrigez", 56],
	];
	console.log(data)

	/**
	 * @description:
	 *  also accepts an array of objects; the method (downloadExcel) will take
	 *  as order of each column, the order that each property of the object brings with it.
	 *  the method(downloadExcel) will only take the value of each property.
	 */
	const body2 = [
		{ firstname: "Edison", lastname: "Padilla", age: 14 },
		{ firstname: "Cheila", lastname: "Rodrigez", age: 56 },
	];

	function handleDownloadExcel() {
		downloadExcel({
			fileName: "react-export-table-to-excel -> downloadExcel method",
			sheet: "react-export-table-to-excel",
			tablePayload: {
				header,
				// accept two different data structures
				body: data || body2,
			},
		});
	}

	return (
		<div>
			<button onClick={handleDownloadExcel}>download excel</button>
{/* 
			<table>
				<tbody>
					<tr>
						{header.map((head) => (
							<th key={head}> {head} </th>
						))}
					</tr>

					{body.map((item, i) => (
						<tr key={i}>
							{item.map((it) => (
								<td key={it}>{it}</td>
							))}
						</tr>
					))}
				</tbody>
			</table> */}
		</div>
	);
};

export default Test;
