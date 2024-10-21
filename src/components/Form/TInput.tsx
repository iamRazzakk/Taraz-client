import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

export default function TInput({
  variant = "bordered",
  size = "md",
  required = false,
  type = "text",
  label,
  name,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Input
      {...register(name)}
      errorMessage={errors[name] ? (errors[name].message as string) : ""}
      isInvalid={!!errors[name]}
      label={label}
      required={required}
      size={size}
      type={type}
      variant={variant}
    />
  );
}
