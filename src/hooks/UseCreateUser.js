import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Register } from "../utility/Auth/ApiRegister";
export default function useRegister() {
	const {
		mutate: register,
		isPending,
		data,
	} = useMutation({
		mutationFn: Register,
		onSuccess: (data) => {
			console.log(data);
			if (data.code === 201) {
				toast.success(data.message);
			} else if (data.code !== 201) {
				toast.error(data.message);
			}
		},
		onError: (err) => {
			console.log(err);
			toast.error(err.message);
			return err;
		},
	});
	return { register, isLoading: isPending, error: data };
}
