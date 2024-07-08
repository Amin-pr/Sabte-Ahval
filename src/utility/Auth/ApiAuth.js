import SupaBase from "../../api/SupaBase";

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

export async function SignUp({ email, password }) {
	console.log(email, password);

	const { data, error } = await SupaBase.auth.signUp({
		email,
		password,
	});
	if (error) throw new Error(error.message);

	return data;
}

export async function GetUserInfo() {}
