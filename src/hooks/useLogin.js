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
			toast.success("خوش آمدید");
			console.log(data);
			navigate("/dashboard");
			queryClient.setQueryData(["userInfo"], data);
		},
		onError: (err) => {
			console.log(err);
			toast.error(err.message);
		},
	});
	return { login, isLoading:isPending };
}
