import { sql } from "../dbConnection.mjs";

//1 Get all Products
export const getAllProductsM = async () => {
  const productList = await sql`
    SELECT * FROM products`;
  return productList;
};

//2. Get products sorted by brands
export const getGroupedBrandsM = async () => {
  const brandList = await sql`
    SELECT brand,
       json_agg(
           jsonb_strip_nulls(
               jsonb_build_object(
                   'id', id,
                   'name', name,
                   'price', price,
                   'event', CASE WHEN onsale THEN 'ON SALE' ELSE NULL END
               )
           )
       ) AS products
    FROM (
        SELECT * FROM products
        ORDER BY brand, price ASC
    ) AS sorted_products
    GROUP BY brand
    ORDER BY brand;`;
  return brandList;
};
