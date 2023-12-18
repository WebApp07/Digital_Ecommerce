"use client";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import GlobalApi from "../_utils/GlobalApi";

const ProductSection = () => {
  const [ProductList, setProductList] = useState([]);
  useEffect(() => {
    getLatestProducts();
  });

  const getLatestProducts = () => {
    GlobalApi.getLatestProducts().then((res) => {
      console.log(res.data.data);
      setProductList(res.data.data);
    });
  };
  return (
    <div>
      <ProductList />
    </div>
  );
};

export default ProductSection;
