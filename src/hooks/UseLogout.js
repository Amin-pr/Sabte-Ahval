import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Logout } from "../utility/Auth/ApiLogOut";

export function useLogout() {
	const navigate = useNavigate();

	const { mutate: logout, isPending } = useMutation({
		mutationFn: (token) => Logout(token),
		onSuccess: (data) => {
			console.log(data);
			if (data.code === 201) {
				navigate(`/login`);
				toast.success(`خروج با موفقیت انجام شد`);
			} else if (data.code !== 201) {
				toast.error(data.message);
			}
		},
		onError: (err) => {
			console.log(err);
			toast.error(err.message);
		},
	});
	return { logout, isLoading: isPending };
}
