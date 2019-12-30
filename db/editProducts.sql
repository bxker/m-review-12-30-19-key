UPDATE products
SET product_price = $1,
    product_name = $2,
    product_img = $3
WHERE
   product_id = $4;

SELECT * FROM products;