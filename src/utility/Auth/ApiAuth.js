export async function Login({ email, password }) {
	const response = await fetch("http://ncrdashboard.icsdev.ir/api/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: email,
			password: password,
		}),
	});

	const result = await response.json();
	console.log(result);
	return result;
}
