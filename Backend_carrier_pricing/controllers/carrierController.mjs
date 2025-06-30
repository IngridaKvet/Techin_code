import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const datafile = path.join(__dirname, "../data/carrier-data.json");
const carriers = JSON.parse(fs.readFileSync(datafile));

// Util functions
function getAllNumbersFromString(str) {
  const numbers = str.match(/\d+/g);
  const numArr = numbers ? numbers.map(Number) : [];
  return numArr.join("");
}

function calculatePrice(distance, vehicle) {
  const pricePerKm = 0.2;
  const defaultPrice = distance * pricePerKm;
  switch (vehicle) {
    case "bicycle":
      return defaultPrice + defaultPrice * 0.1;
    case "motorbike":
      return defaultPrice + defaultPrice * 0.15;
    case "parcel_car":
      return defaultPrice + defaultPrice * 0.2;
    case "small_van":
      return defaultPrice + defaultPrice * 0.3;
    case "large_van":
      return defaultPrice + defaultPrice * 0.4;
    default:
      return defaultPrice;
  }
}

function getCarrierByName(name) {
  return carriers.find(
    (c) => c.carrier_name.toLowerCase() === name.toLowerCase()
  );
}

// 1. Basic Servise
export const basicService = (req, res) => {
  const input = req.body;
  const distance =
    getAllNumbersFromString(input.pickup_postcode) *
    getAllNumbersFromString(input.delivery_postcode);
  res.status(201).json({
    status: "success",
    pickup_postcode: input.pickup_postcode,
    delivery_postcode: input.delivery_postcode,
    distance_km: distance.toString(),
  });
};

export const calculatePriceController = (req, res) => {
  const input = req.body;
  const distance =
    getAllNumbersFromString(input.pickup_postcode) *
    getAllNumbersFromString(input.delivery_postcode);
  const totalPrice = calculatePrice(distance, input.vehicle).toFixed(2);

  res.status(201).json({
    status: "success",
    pickup_postcode: input.pickup_postcode,
    delivery_postcode: input.delivery_postcode,
    distance_km: distance.toString(),
    price: totalPrice,
  });
};

export const priceByVehicle = (req, res) => {
  const input = req.body;
  const distance =
    getAllNumbersFromString(input.pickup_postcode) *
    getAllNumbersFromString(input.delivery_postcode);
  const totalPrice = calculatePrice(distance, input.vehicle).toFixed(2);

  res.status(201).json({
    status: "success",
    pickup_postcode: input.pickup_postcode,
    delivery_postcode: input.delivery_postcode,
    vehicle: input.vehicle,
    price: totalPrice,
  });
};

export const priceByCarrier = (req, res) => {
  const input = req.body;

  const carrier = getCarrierByName(input.carrier_name);

  res.status(201).json({
    status: "success",
    pickup_postcode: input.pickup_postcode,
    delivery_postcode: input.delivery_postcode,
    carrier_name: carrier.carrier_name,
    basePrice: carrier.base_price,
  });
};

export const variablePriceByVehicle = (req, res) => {
  const input = req.body;

  const vehicleType = input.vehicle;
  const distance =
    getAllNumbersFromString(input.pickup_postcode) *
    getAllNumbersFromString(input.delivery_postcode);
  const totalPrice = calculatePrice(distance, input.vehicle).toFixed(2);

  const priceList = [];

  carriers.forEach((carrier) => {
    carrier.services.forEach((service) => {
      if (service.vehicles.includes(vehicleType)) {
        const basePrice = Number(carrier.base_price);
        const serviceMarkup = Number(service.markup);

        const totalPriceFull = basePrice + Number(totalPrice) + serviceMarkup;

        priceList.push({
          service: carrier.carrier_name,
          price: totalPriceFull,
          delivery_time: service.delivery_time,
        });
      }
    });
  });

  res.status(201).json({
    status: "success",
    pickup_postcode: input.pickup_postcode,
    delivery_postcode: input.delivery_postcode,
    vehicle: input.vehicle,
    price_list: priceList,
  });
};
