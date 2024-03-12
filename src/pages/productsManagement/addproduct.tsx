import { Label, Select, TextInput } from "flowbite-react";

import { useForm } from "react-hook-form";
import { useAddProductMutation } from "../../redux/api/productApi/productApi";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const [AddProduct] = useAddProductMutation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    if (!data.size) {
      delete data.size;
    }
    data.price = parseInt(data.price);
    data.quantity = parseInt(data.quantity);
    data.size = parseInt(data.size);
    data.weight = parseFloat(data.weight);
    if (!data.size) {
      delete data.size;
    }
    if (!data.weight) {
      delete data.weight;
    }
    console.log(data);
    const res = await AddProduct(data);

    if ("data" in res) {
      alert("product added Successfully");
    }
    if ("error" in res) {
      alert("product lisiting failed!");
      return;
    }
    window.location.reload();
  };

  return (
    <div className="mx-auto mt-5 md:mt-20">
      <h1 className="text-2xl text-blue-950 font-bold my-8">Add Product</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-w-md flex-col gap-4 mx-auto"
      >
        <div className="grid grid-cols-6 gap-3">
          <div className="col-span-4">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Product name:" />
            </div>
            <TextInput
              id="name"
              type="text"
              sizing="sm"
              {...register("name")}
            />
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="brand" value="Brand:" />
            </div>
            <TextInput
              id="brand"
              type="text"
              sizing="sm"
              {...register("brand")}
            />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-3">
          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price (tk):" />
            </div>
            <TextInput
              id="price"
              type="text"
              sizing="sm"
              {...register("price")}
            />
          </div>
          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="sportsType" value="Sports Type:" />
            </div>
            <TextInput
              id="sportsType"
              type="text"
              sizing="sm"
              {...register("sportsType")}
            />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-3">
          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="quantity" value="Quantity:" />
            </div>
            <TextInput
              id="quantity"
              type="text"
              sizing="sm"
              {...register("quantity")}
            />
          </div>
          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="condition" value="Condition:" />
            </div>
            <Select id="condition" {...register("condition")} required>
              <option>new</option>
              <option>used</option>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-3">
          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="material" value="Material:" />
            </div>
            <TextInput
              id="material"
              type="text"
              sizing="sm"
              {...register("material")}
            />
          </div>
          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="color" value="Color:" />
            </div>
            <TextInput
              id="color"
              type="text"
              sizing="sm"
              {...register("color")}
            />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-3">
          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="size" value="Size (optional):" />
            </div>
            <TextInput
              id="size"
              type="text"
              sizing="sm"
              {...register("size")}
            />
          </div>
          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="branch" value="Branch:" />
            </div>
            <TextInput
              id="branch"
              type="text"
              sizing="sm"
              {...register("branch")}
            />
          </div>
          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="weight" value="Weight(KG) (optional):" />
            </div>
            <TextInput
              id="weight"
              type="text"
              sizing="sm"
              {...register("weight")}
            />
          </div>
        </div>

        <button
          type="submit"
          className="px-5 py-3 bg-blue-950 text-white rounded-2xl"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
