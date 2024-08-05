export async function UpdatePassword({ id, password, password_confirmation }) {
	const token = localStorage.getItem("accessToken");
	console.log(id, password, password_confirmation);
	const response = await fetch(
		` http://ncrdashboard.icsdev.ir/api/v1/admin/change-user-password/${id}`,
		{
			method: "PATCH",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				password: password,
				password_confirmation: password_confirmation,
			}),
		}
	);
	const result = await response.json();
	console.log(result, response);

	return result;
}
