export async function Logout({ token }) {
	console.log(token);
	const response = await fetch(
		"http://ncrdashboard.icsdev.ir/api/auth/logout",
		{
			method: "POST",
			headers: {
				// "Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		}
	);

	const result = await response.json();
	return result;
}
