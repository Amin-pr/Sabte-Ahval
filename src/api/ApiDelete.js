export async function Delete(id) {
	console.log(id);

	const token = sessionStorage.getItem("accessToken");
	const response = await fetch(
		`http://ncrdashboard.icsdev.ir/api/v1/admin/delete-user/${id}`,
		{
			method: "DELETE",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		}
	);
	const result = await response.json();

	return result;
}
