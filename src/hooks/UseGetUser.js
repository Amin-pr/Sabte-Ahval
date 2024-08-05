import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { GetUsers } from "../api/ApiGetUser";

export default function UseGetUser() {
	const { data, error, isPending } = useQuery({
		queryKey: ["users"],
		queryFn: GetUsers,

		staleTime: 300000,
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
		},
	});
	console.log("called");

	return { data, isPending, error };
}
