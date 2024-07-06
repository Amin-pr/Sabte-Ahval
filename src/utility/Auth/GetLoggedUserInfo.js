import supabase from "../SupaBase/SupaBase";

export async function GetLoggedUserInfo() {
	const { data } = await supabase.auth.getUser();
	return data;
}
