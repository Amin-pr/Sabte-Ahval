import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Login } from "../utility/Auth/ApiAuth";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export function useLogin() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	let { token } = useParams();

	const { mutate: login, isPending } = useMutation({
		mutationFn: (username, password) => Login(username, password),
		onSuccess: (data) => {
			console.log(data);
			if (data.code === 201) {
				// Store the token data in session storage or local storage

				console.log(data.data.access_token);
				queryClient.setQueryData(["userInfo"], data);
				navigate(`/dashboard/:${data.data.access_token}`);
				toast.success("خوش آمدید");
			} else if (data.code !== 201) {
				toast.error(data.message);
			}
		},
		onError: (err) => {
			console.log(err);
			toast.error(err.message);
		},
	});
	return { login, isLoading: isPending };
}
