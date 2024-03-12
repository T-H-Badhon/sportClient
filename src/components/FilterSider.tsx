/* eslint-disable @typescript-eslint/no-explicit-any */

import { Label, TextInput } from "flowbite-react";

import { useForm } from "react-hook-form";
import { Sidebar } from "react-pro-sidebar";

const FilterSider = ({
  collapsed,
  setProductQuery,
  setCollapsed,
}: {
  collapsed: boolean;
  setProductQuery: any;
  setCollapsed: any;
}) => {
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    data.minPrice = parseInt(data.minPrice);
    data.maxPrice = parseInt(data.maxPrice);

    if (!data.minPrice) {
      delete data.minPrice;
    }
    if (!data.maxPrice) {
      delete data.maxPrice;
    }
    setCollapsed(true);
    setProductQuery(data);
  };

  return (
    <div>
      <Sidebar collapsed={collapsed} collapsedWidth="0px" width="200px">
        <h1>Filter Terms:</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
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

          <div>
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price Range:" />
            </div>
            <div className="flex">
              <TextInput
                id="price"
                type="text"
                sizing="sm"
                {...register("minPrice")}
                placeholder="min"
              />
              -
              <TextInput
                id="price"
                type="text"
                sizing="sm"
                {...register("maxPrice")}
                placeholder="max"
              />
            </div>
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
            <TextInput
              id="condition"
              type="text"
              sizing="sm"
              {...register("condition")}
            />
          </div>

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

          <div className="col-span-3">
            <div className="mb-2 block">
              <Label htmlFor="size" value="Size:" />
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
              <Label htmlFor="weight" value="Weight(kg):" />
            </div>
            <TextInput
              id="weight"
              type="text"
              sizing="sm"
              {...register("weight")}
            />
          </div>

          <button
            type="submit"
            className="px-5 py-3 bg-blue-950 text-white rounded-2xl"
          >
            Filter
          </button>
        </form>
      </Sidebar>
    </div>
  );
};

export default FilterSider;
