import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import { useAllProductsQuery } from "../../redux/api/productApi/productApi";
import ProductCard from "../../components/ProductCard";

const SellProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data } = useAllProductsQuery(searchTerm);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const searchFunction = (data: any) => {
    setSearchTerm(data);
  };

  return (
    <div>
      <SearchBar searchFunction={searchFunction}></SearchBar>
      <br />
      <div className="mx-10">
        <h1 className="text-xl text-left">Products:</h1>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {data?.data.length
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
              data.data.map((product: any) => (
                <ProductCard product={product} key={product._id}></ProductCard>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default SellProducts;
