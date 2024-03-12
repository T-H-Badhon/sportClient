/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Checkbox } from "flowbite-react";

import { useForm } from "react-hook-form";
import {
  useAllProductsQuery,
  useDeleteProductMutation,
} from "../../redux/api/productApi/productApi";

const DeleteProducts = () => {
  const { register, handleSubmit } = useForm();

  const { data } = useAllProductsQuery("");

  const [deleteProduct] = useDeleteProductMutation();

  const onSubmit = async (data: any) => {
    await deleteProduct(data.ids);

    window.location.reload();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-end my-5 mx-5">
          <Button type="submit">delete</Button>
        </div>

        <hr />
        <div className=" ">
          {data?.data?.length
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
              data?.data.map((product: any) => (
                <div className="grid grid-cols-5 mx-5 my-2 py-2 px-5 bg-slate-400 ">
                  <Checkbox
                    className="col-span-1"
                    id="1"
                    value={product._id}
                    {...register("ids")}
                  />
                  <h1 className="text-left col-span-2">{product.name}</h1>
                  <h1 className="text-left col-span-1">
                    Brand: {product.brand}
                  </h1>
                  <h1 className="text-left col-span-1">
                    Color: {product.color}
                  </h1>
                </div>
              ))
            : null}
        </div>
      </form>
    </div>
  );
};

export default DeleteProducts;
