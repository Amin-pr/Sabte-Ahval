import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Login } from "../api/ApiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function UseLogin() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const currentTime = Math.floor(new Date().getTime() / 1000 / 60) + 60;

	const { mutate: login, isPending } = useMutation({
		mutationFn: async (username, password) => {
			if (!navigator.onLine) {
				toast.error("اتصال برقرار نیست");
				return;
			}

			try {
				const response = await fetch(
					"https://cdn.jsdelivr.net/npm/react@17.0.2/index.min.js"
				);
				if (!response.ok) {
					toast.error("اتصال برقرار نیست");
					return;
				}
			} catch (error) {
				toast.error("اتصال برقرار نیست");
				return;
			}

			return Login(username, password);
		},
		onSuccess: (data) => {
			if (data.code === 201) {
				// Store the token data in session storage or local storage

				console.log(data.data.access_token);
				queryClient.setQueryData(["userInfo"], data);
				sessionStorage.setItem("accessToken", data.data.access_token);
				sessionStorage.setItem("name", data.data.name);
				sessionStorage.setItem("tokenExpireTime", currentTime);
				navigate(`/`);
				toast.success(` ${data.data.name} خوش آمدی`);
			} else if (data.code !== 201) {
				toast.error(data.message);
			}
		},
		onError: (err) => {
			console.log(err);
			if (err.message) toast.error(err.message);
		},
	});
	return { login, isLoading: isPending };
}
