import { getAllProductsM, getGroupedBrandsM } from "../models/productModel.mjs";

// 1. Get all products
export const getAllProducts = async (req, res) => {
  try {
    const productList = await getAllProductsM();

    res.status(200).json({
      status: "success",
      requestedTime: req.requestTime,
      data: productList,
    });
  } catch (error) {
    res.status(500).json({
      status: error,
      message: error.message,
    });
  }
};

// 2. Get grouped products
export const getGroupedBrands = async (req, res) => {
  try {
    const brandList = await getGroupedBrandsM();

    res.status(200).json({
      status: "success",
      requestedTime: req.requestTime,
      data: brandList,
    });
  } catch (error) {
    res.status(500).json({
      status: error,
      message: error.message,
    });
  }
};
