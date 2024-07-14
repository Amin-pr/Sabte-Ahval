export async function Register({username, password, phone_number, ref_id, name}) {
	console.log(name, username, password, phone_number, ref_id);
	const response = await fetch(
		"http://ncrdashboard.icsdev.ir/api/auth/register",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: name,
				username: username,
				password: password,
				password_confirmation: password,
				phone_number: phone_number,
				ref_id: ref_id,
			}),
		}
	);
	const result = await response.json();

	return result;
}
