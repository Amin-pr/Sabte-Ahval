import { Suspense, useEffect, useRef } from "react";
import Loading from "../loading/Loading";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export function ProtectedRoute({ children }) {
  const token = sessionStorage.getItem("accessToken");
  const tokenExpireTime = Number(sessionStorage.getItem("tokenExpireTime"));
  const currentTime = Math.floor(new Date().getTime() / 1000 / 60) + 1;
  let tokenTimeLeft = tokenExpireTime - currentTime;

  console.log(tokenExpireTime, currentTime, token, tokenTimeLeft);

  const hasShownToastRef = useRef(false);

  useEffect(() => {
    if (tokenTimeLeft <= 0 && !hasShownToastRef.current) {
      toast.error("زمان شما منقضی شده لطفا دوباره ورود کنید");
      hasShownToastRef.current = true;
    }
  }, [tokenTimeLeft]);

  if (!token || tokenTimeLeft <= 0) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return (
    <Suspense fallback={<Loading text={"لطفا صبر نمایید..."} />}>
      {children}
    </Suspense>
  );
}