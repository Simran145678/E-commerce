import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "lipstic",
    description: "Rose red in matt",
    price: "$35",
    image:
      "https://www.maccosmetics.ca/media/export/cms/products/640x600/mac_sku_M2LP05_640x600_0_vto.jpg",
  },
  {
    id: 2,
    name: "mascara",
    description: "perfect lash lift",
    price: "$30",
    image:
      "https://www.sephora.com/productimages/sku/s2294312-main-zoom.jpg?imwidth=315",
  },
];
const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};
export default Products;
