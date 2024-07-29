import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Delete } from "../api/ApiDelete";
export default function UseDeleteUser() {
	const {
		mutate: DeleteUser,
		isPending,
		data,
	} = useMutation({
		mutationFn: Delete,
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
	return { DeleteUser, isLoading: isPending, data };
}
