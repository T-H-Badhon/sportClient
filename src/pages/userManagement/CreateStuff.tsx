/* eslint-disable @typescript-eslint/no-explicit-any */

import { useSignUpMutation } from "../../redux/api/userApi/userApi";

import { useForm } from "react-hook-form";
import { Button, Label, Select, TextInput } from "flowbite-react";

const CreateStuff = () => {
  const { register, handleSubmit } = useForm();

  const [signUp] = useSignUpMutation();

  const onSubmit = async (data: any) => {
    if (data.password !== data.repeatPassword) {
      alert("Password not Matched");
      return;
    }

    console.log(data);

    const res = await signUp(data);

    if (res && "error" in res) {
      const error: any = res.error;

      alert(error.data.errorMessage);
      return;
    } else {
      alert(" Stuff created successfully");
    }

    window.location.reload();
  };

  return (
    <div className="container mt-20 md:mt-40 mx-auto">
      <h1 className="text-xl text-center text-blue-700">Create staff</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-w-md flex-col gap-4 mx-auto"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your name" />
          </div>
          <TextInput
            id="name"
            type="text"
            required
            shadow
            {...register("name")}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="Username" />
          </div>
          <TextInput
            id="username"
            type="text"
            required
            shadow
            {...register("username")}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="branch" value="Branch" />
          </div>
          <TextInput
            id="branch"
            type="text"
            required
            shadow
            {...register("branch")}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="example@gmail.com"
            required
            shadow
            {...register("email")}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="role" value="Role" />
          </div>
          <Select id="role" className="w-full" {...register("role")}>
            <option value="manager">Manager</option>
            <option value="seller">Seller</option>
          </Select>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput
            id="password"
            type="password"
            required
            shadow
            {...register("password")}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeatPassword" value="Repeat password" />
          </div>
          <TextInput
            id="repeatPassword"
            type="password"
            required
            shadow
            {...register("repeatPassword")}
          />
        </div>

        <Button type="submit">Create</Button>
      </form>
    </div>
  );
};

export default CreateStuff;
