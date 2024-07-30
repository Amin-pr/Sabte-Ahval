export async function EditUser({ id, username, phone_number, role_id, name }) {
	console.log(id, name, username, phone_number, role_id);

	const token = localStorage.getItem("accessToken");
	const response = await fetch(
		`http://ncrdashboard.icsdev.ir/api/v1/admin/update-user/${id}`,
		{
			method: "PATCH",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				name: name,
				username: username,
				phone_number: phone_number,
				role_id: role_id,
			}),
		}
	);
	const result = await response.json();
	console.log(result, response);

	return result;
}
