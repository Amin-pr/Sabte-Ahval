export async function Delete(id) {
	console.log(id);

	const token = localStorage.getItem("accessToken");
	const response = await fetch(
		`http://ncrdashboard.icsdev.ir/api/v1/admin/delete-user/${id}`,
		{
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		}
	);
	const result = await response.json();
	console.log(result, response);

	return result;
}
