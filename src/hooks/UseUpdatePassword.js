import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { UpdatePassword } from "../api/ApiUpdatePassword";
export default function UseUpdatePassword() {
	const {
		mutate: updatePassword,
		isPending,
		data,
	} = useMutation({
		mutationFn: UpdatePassword,
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

	return { updatePassword, isLoading: isPending, data };
}
