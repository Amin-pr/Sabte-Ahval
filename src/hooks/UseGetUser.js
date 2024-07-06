import SupaBase from "../api/SupaBase";

async function getUser() {
	const {
		data: { user },
	} = await SupaBase.auth.getUser();
	return user;
}
export default getUser;
