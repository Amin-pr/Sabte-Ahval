import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { GetUsers } from "../api/ApiGetUser";
export default function UseGetUser() {
	const {
		mutate: GetUser,
		isPending,
		data,
	} = useMutation({
		mutationFn: GetUsers,
		onSuccess: (data) => {
			console.log(data.data.users.data);
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
	return { GetUser, isLoading: isPending, data };
}
