export async function Register({
	username,
	password,
	phone_number,
	role_id,
	name,
}) {
	console.log(name, username, password, phone_number, role_id);

	const token = localStorage.getItem("accessToken");
	const response = await fetch(
		"http://ncrdashboard.icsdev.ir/api/v1/admin/create-user",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				name: name,
				username: username,
				password: password,
				password_confirmation: password,
				phone_number: phone_number,
				role_id: role_id,
			}),
		}
	);
	const result = await response.json();
	console.log(result,response)

	return result;
}
