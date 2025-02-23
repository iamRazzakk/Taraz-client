"use client";

import TForm from "@/src/components/Form/TForm";
import TInput from "@/src/components/Form/TInput";
import { useSignUpMutation } from "@/src/redux/Provider/Api/AuthAPi/authApi";
import { Button } from "@nextui-org/button";
import Link from "next/link";
// import { useRouter } from "next/router";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

export default function RegisterPage() {
  // const router = useRouter();
  const [signUp, { isLoading, error }] = useSignUpMutation();
  // const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userData = {
      ...data,
      role: "USER",
    };
    // console.log(userData);
    try {
      const response = await signUp(userData).unwrap();
      toast.success("Registration successful");
      // router.push("/login");
    } catch (error) {
      toast.error("Failed to register. Please try again.");
    }
  };

  return (
    <div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center">
      <h3 className="my-2 text-xl font-bold">Register with Taraz</h3>
      <div className="w-[35%]">
        <TForm
          // resolver={zodResolver(registerValidationSchema)}
          onSubmit={onSubmit}
        >
          <div className="py-3">
            <TInput label="Name" name="name" size="sm" />
          </div>
          <div className="py-3">
            <TInput label="Email" name="email" size="sm" />
          </div>
          <div className="py-3">
            <TInput label="Mobile Number" name="mobileNumber" size="sm" />
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
            Registration
          </Button>
        </TForm>
        <div className="text-center">
          Already have an account ? <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
}
