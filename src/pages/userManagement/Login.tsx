/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { useLoginMutation } from "../../redux/api/authApi/authApi";
import { varifyToken } from "../../utilities/varifyToken";
import { setUser } from "../../redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const role = useAppSelector((state) => state.auth.role);

  const [login] = useLoginMutation();

  const onSubmit = async (data: any) => {
    try {
      const res = await login(data).unwrap();

      const userInfo = varifyToken(res.data.token);

      const user = { ...userInfo, token: res.data.token };
      dispatch(setUser(user));

      navigate(`/${role}/dashboard`);
    } catch (error: any) {
      if (error.data) {
        alert(error.data.errorMessage);
      }
    }
  };

  return (
    <div className="container mt-20 md:mt-40 mx-auto">
      <h1 className="text-xl text-center text-blue-700">Login !</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-w-md flex-col gap-4 mx-auto"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Username" />
          </div>
          <TextInput
            id="username"
            type="text"
            required
            {...register("username")}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            required
            {...register("password")}
          />
        </div>
        <div>
          <h1>
            Don't have account?{" "}
            <Link to="/register">
              <span className="text-blue-700">Register Now</span>
            </Link>
          </h1>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
