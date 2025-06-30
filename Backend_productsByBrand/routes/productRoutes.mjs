import express from "express";
import {
  getAllProducts,
  getGroupedBrands,
} from "../controllers/productController.mjs";

const router = express.Router();
router.route("/").get(getAllProducts);
router.route("/brands").get(getGroupedBrands);

export default router;
