import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { EditUser } from "../api/ApiEditUser";
export default function UseEditUser() {
	const {
		mutate: edit,
		isPending,
		data,
	} = useMutation({
		mutationFn: EditUser,
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
	return { edit, isLoading: isPending, data };
}
