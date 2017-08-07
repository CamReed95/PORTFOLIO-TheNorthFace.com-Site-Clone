SELECT * FROM products
JOIN product_views
ON products.product_id = product_views.product_id
WHERE gender = $1 AND category = $2
LIMIT $3;
