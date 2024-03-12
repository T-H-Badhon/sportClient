/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "flowbite-react";

import { Link } from "react-router-dom";
import SellModal from "./SellModal";
import { useState } from "react";
import { useSellProductMutation } from "../redux/api/saleApi/saleApi";
import { useAppSelector } from "../redux/hook";

type TProps = {
  product: any;
  deleteFunc?: any;
  createVariant?: any;
};

const ProductCard = ({ product, deleteFunc }: TProps) => {
  const [openModal, setOpenModal] = useState(false);

  const role = useAppSelector((state) => state.auth.role);

  const [sellProduct] = useSellProductMutation();

  const sellFunc = async (saleInfo: any) => {
    if (product.quantity < saleInfo.sellQuantity) {
      alert("quantity exits");
      return;
    }
    const currentQuantity = product.quantity - saleInfo.sellQuantity;
    const data = { ...saleInfo, currentQuantity, productId: product._id };

    await sellProduct(data);

    setOpenModal(false);
    window.location.reload();
  };

  return (
    <>
      <SellModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        sellFunc={sellFunc}
      ></SellModal>
      <Card href="#" className="max-w-sm text-left">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Brand: {product.brand}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          price: {product.price}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          quantity: {product.quantity}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          material: {product.material}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          color: {product.color}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          sportsType: {product.sportsType}
        </p>
        {product?.size ? (
          <p className="font-normal text-gray-700 dark:text-gray-400">
            size: {product.size}
          </p>
        ) : null}
        <hr />
        {role != "seller" ? (
          <div className="flex justify-end space-x-1">
            <Link to={`/${role}/updateProduct/${product._id}`}>
              <button className="px-2 py-2 rounded-md bg-slate-800 text-white">
                update
              </button>
            </Link>
            <Link to={`/${role}/createDuplicate/${product._id}`}>
              <button className="px-2 py-2 rounded-md bg-slate-800 text-white">
                Create Variant
              </button>
            </Link>
            <button
              className="px-2 py-2 rounded-md bg-red-600"
              onClick={() => deleteFunc(product._id)}
            >
              Delete
            </button>
          </div>
        ) : !deleteFunc ? (
          <div className="flex justify-end">
            <button
              onClick={() => setOpenModal(!openModal)}
              className="px-4 py-2 rounded-md bg-green-700"
            >
              Sell
            </button>
          </div>
        ) : null}
      </Card>
    </>
  );
};

export default ProductCard;
