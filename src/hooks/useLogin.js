import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Login } from "../api/ApiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function UseLogin() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const currentTime = Math.floor(new Date().getTime() / 1000 / 60) + 2;

	const { mutate: login, isPending } = useMutation({
		mutationFn: (username, password) => Login(username, password),
		onSuccess: (data) => {
			console.log(data);
			if (data.code === 201) {
				// Store the token data in session storage or local storage

				console.log(data.data.access_token);
				queryClient.setQueryData(["userInfo"], data);
				sessionStorage.setItem("accessToken", data.data.access_token);
				sessionStorage.setItem("name", data.data.name);
				sessionStorage.setItem("tokenExpireTime", currentTime);
				sessionStorage;
				navigate(`/`);
				toast.success(` ${data.data.name} خوش آمدی`);
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
