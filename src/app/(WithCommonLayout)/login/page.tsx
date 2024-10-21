"use client";
import TForm from "@/src/components/Form/TForm";
import TInput from "@/src/components/Form/TInput";
import { useSignInMutation } from "@/src/redux/Provider/Api/AuthAPi/authApi";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useAppDispatch } from "@/src/redux/hooks";
import { setUser } from "@/src/redux/Provider/auth/authSlice";
import { verifyToken } from "@/src/utils/verifyToken";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const [signIn, { isLoading, isError }] = useSignInMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = await signIn(data).unwrap();
      const { accessToken } = response.data;

      Cookies.set("accessToken", accessToken);

      const decodedUser = verifyToken(accessToken);

      dispatch(setUser({ user: decodedUser, token: accessToken }));

      toast.success("Login successful");
    } catch (error) {
      toast.error("Failed to login. Please try again.");
    }
  };

  return (
    <div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center">
      <h3 className="my-2 text-xl font-bold">Login to Taraz</h3>{" "}
      {/* Update title for clarity */}
      <div className="w-[35%]">
        <TForm onSubmit={onSubmit}>
          <div className="py-3">
            <TInput label="Email" name="email" size="sm" />
          </div>
          <div className="py-3">
            <TInput
              label="Password"
              name="password"
              size="sm"
              type="password"
            />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-default-900 text-default"
            size="lg"
            type="submit"
          >
            Login
          </Button>
        </TForm>
        <div className="text-center">
          Don't have an account? <Link href={"/register"}>Register</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
