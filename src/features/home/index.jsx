import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Container,
} from "@mui/material";
import ProductCard from "../../components/ProductCard";
import { selectProductData, getProducts } from "../product/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductData);

  console.log("products: ", products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <ProductCard prd={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
