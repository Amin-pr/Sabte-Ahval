import { toast } from "react-toastify";
import SupaBase from "../../api/SupaBase";

export async function Login({email, password}) {
	console.log(email, password);
	const { data, error } = await SupaBase.auth.signInWithPassword({
		email,
		password,
	});
	if (error) throw new Error(error.message);
	console.log(data);
	return data;
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
