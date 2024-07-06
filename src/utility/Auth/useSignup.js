import { useMutation } from "@tanstack/react-query";
import { SignUp } from "./ApiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useSignup() {
	const navigate = useNavigate();
	const { mutate: signUp, isLoading } = useMutation({
		mutationFn: ({ email, password }) => SignUp(email, password),
		onSuccess: () => {
			toast.success("Signed up in Succesfully");
			// navigate("/home");
		},
		onError: (err) => {
			console.log(err);
			toast.error(err.message);
		},
	});
	return { signUp, isLoading };
}
