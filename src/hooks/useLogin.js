import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Login } from "../utility/Auth/ApiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useLogin() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { mutate: login, isPending } = useMutation({
		mutationFn: (email, password) => Login(email, password),
		onSuccess: (data) => {
			console.log(data);
			if (data.code === 201) {
				queryClient.setQueryData(["userInfo"], data);
				navigate("/dashboard");
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
