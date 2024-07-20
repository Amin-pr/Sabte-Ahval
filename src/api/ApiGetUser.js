export async function GetUsers({ token }) {
	console.log(token);

	const response = await fetch(
		"http://ncrdashboard.icsdev.ir/api/v1/admin/get-users",
		{
			method: "GET",
			headers: {
				// "Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		}
	);

	const result = await response.json();
	return result;
}
