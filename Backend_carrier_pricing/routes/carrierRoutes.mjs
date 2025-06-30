import express from "express";
import { basicService, calculatePriceController, priceByVehicle, priceByCarrier, variablePriceByVehicle} from "../controllers/carrierController.mjs";


const router = express.Router();

router.route('/basicService').post(basicService);
router.route('/calculatePrice').post(calculatePriceController);
router.route('/priceByVehicle').post(priceByVehicle);
router.route('/priceByCarrier').post(priceByCarrier);
router.route('/variablePrice').post(variablePriceByVehicle);


export default router;