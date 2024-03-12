/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Select } from "flowbite-react";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { useAllBranchQuery } from "../../redux/api/userApi/userApi";
import { useAdminSalesReportQuery } from "../../redux/api/saleReportApi/saleReportApi";

const ASaleReport = () => {
  const { register, handleSubmit } = useForm();

  const [queryData, setQueryData] = useState({
    startDate: new Date().toLocaleDateString(),
    endDate: new Date().toLocaleDateString(),
    branch: "",
  });

  const { data: branches } = useAllBranchQuery("");
  console.log(branches);
  const { data: sales } = useAdminSalesReportQuery(queryData);

  console.log(sales);

  const [heading, setHeading] = useState("Today's sale report");

  const onSubmit = (data: any) => {
    let startDate = new Date();
    let endDate = new Date();
    const branch = data.branch;

    if (data.reportTime == "today") {
      setQueryData({
        startDate: startDate.toLocaleDateString(),
        endDate: endDate.toLocaleDateString(),
        branch,
      });
      setHeading("Today's sale report");
    }

    if (data.reportTime == "weekly") {
      startDate.setDate(endDate.getDate() - 7);

      setQueryData({
        startDate: startDate.toLocaleDateString(),
        endDate: endDate.toLocaleDateString(),
        branch,
      });
      setHeading("last 7 days sale report");
    }
    if (data.reportTime == "monthly") {
      const currentDate = new Date();

      startDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      );
      endDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      );

      setQueryData({
        startDate: startDate.toLocaleDateString(),
        endDate: endDate.toLocaleDateString(),
        branch,
      });
      setHeading("this month sale report");
    }
    if (data.reportTime == "yearly") {
      const currentDate = new Date();
      startDate = new Date(currentDate.getFullYear(), 0, 1);
      endDate = new Date(currentDate.getFullYear(), 11, 31);
      setQueryData({
        startDate: startDate.toLocaleDateString(),
        endDate: endDate.toLocaleDateString(),
        branch,
      });
      setHeading("this year sale report");
    }
  };

  let serial = 0;

  return (
    <div>
      <div>
        <h1 className="text-5xl text-center font-semibold my-5">Dashboard</h1>
      </div>
      <hr className="mx-2" />
      <div className="mx-5">
        <h1 className="text-4xl text-left font-semibold my-5">{heading}</h1>
      </div>

      <div className="flex justify-around mt-10 md:mt-28">
        <div>
          <h1 className="text-6xl text-center font-semibold">
            {sales?.data?.totalQuantity | 0}
          </h1>
          <h1 className="text-4xl text-center">Total Order</h1>
        </div>
        <div>
          <h1 className="text-6xl text-center font-semibold">
            {sales?.data?.totalSaleValue | 0}
          </h1>
          <h1 className="text-4xl text-center">Total Order Value</h1>
        </div>
      </div>
      <hr className="my-5" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-around mt-15">
          <Select id="reportTime" {...register("reportTime")}>
            <option value="today">Today</option>
            <option value="weekly">this week</option>
            <option value="monthly">this month</option>
            <option value="yearly">this year</option>
          </Select>
          <Select id="reportTime" {...register("branch")}>
            <option value="">All</option>
            {branches?.data.map((item: { branch: string; _id: string }) => {
              return <option value={item.branch}>{item.branch}</option>;
            })}
          </Select>

          <Button type="submit">Show Report</Button>
        </div>
      </form>
      <hr className="my-5" />
      <div className="grid grid-cols-10 py-4 bg-slate-500">
        <div className="text-lg col-span-1">serial</div>
        <div className="text-lg col-span-4 text-left">Product name</div>
        <div className="text-lg col-span-3">Buyer's name</div>
        <div className="text-lg col-span-2">Selling date</div>
      </div>

      <hr />
      <div>
        {sales?.data?.sales
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            sales.data.sales.map((sale: any) => {
              serial++;
              return (
                <div
                  className={`grid grid-cols-10 py-2 my-1 ${
                    serial % 2 == 1 ? "bg-white" : "bg-lime-300"
                  } `}
                >
                  <div className="text-lg col-span-1">{serial}</div>
                  <div className="text-lg col-span-4 text-left">
                    {sale.productName}
                  </div>
                  <div className="text-lg col-span-3">{sale.buyer}</div>
                  <div className="text-lg col-span-2">
                    {sale.date.toString().split("T")[0]}
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ASaleReport;
