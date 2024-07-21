/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import CsvDownloader from "../csvDownloader/CsvDownloader";
import styles from "../table/DataGrid.module.scss";
import { faIR } from "@mui/x-data-grid/locales";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function DataTable({ columns, rows }) {
	const downloadCols = columns?.map((column) => column.headerName).reverse();
	const [selectedRows, setSelectedRows] = useState();

	const selectedRowsData = selectedRows?.map((rowId) =>
		rows.find((row) => row.id === rowId)
	);
	console.log(selectedRowsData);
	return (
		<Box className={styles.holder}>
			<DataGrid
				rows={rows}
				columns={columns}
				localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
				pageSizeOptions={[5]}
				checkboxSelection
				rowSelectionModel={selectedRows}
				onRowSelectionModelChange={(newselection) =>
					setSelectedRows(newselection)
				}
				sx={{
					boxShadow: 2,
					border: 2,
					borderColor: "primary.light",
					"& .MuiDataGrid-cell": { textAlign: "right" },
				}}
			/>
			<Box>
				<CsvDownloader
					header={downloadCols}
					row={selectedRowsData}
				/>
			</Box>
		</Box>
	);
}
