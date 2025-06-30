import express from "express";
import { alphaData, flattenData, statusData} from "../controllers/dataController.mjs";

const router = express.Router();

router.route('/alpha').put(alphaData)
router.route('/flatten').put(flattenData)
router.route('/status').get(statusData)

export default router;