INSERT INTO products
(product_price, product_name, product_img)
VALUES
($1, $2, $3)
RETURNING *;