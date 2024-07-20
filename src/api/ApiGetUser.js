export async function GetUsers() {
	const token = localStorage.getItem("accessToken");
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
	console.log(result);
	return result;
}
