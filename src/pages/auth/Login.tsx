import { SubmitHandler, useForm } from "react-hook-form";

import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { LoginInputs } from "../../interfaces/loginInputs";
import { useLoginMutation } from "../../state/queries/authApi";
import { useEffect } from "react";

const Login = () => {
  const { register, handleSubmit } = useForm<LoginInputs>();
  const [loginUser, result] = useLoginMutation();
  const { data, error } = result;

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    loginUser(data);
  };

  useEffect(() => {
    if (data) {
      console.log(data);
    }

    if (error) {
      console.log(error);
    }
  }, [data, error]);

  return (
    <div>
      <form
        className="flex flex-col gap-4 w-1/2 justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input {...register("email")} type="text" placeholder="Username" />
        <Input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
