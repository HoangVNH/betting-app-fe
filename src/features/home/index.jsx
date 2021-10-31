import React from "react";
import { useSelector } from "react-redux";
import {
  Grid,
  Container,
} from "@mui/material";
import ProductCard from "../../components/ProductCard";
import { getProducts } from "../../features/product/productSlice";

// const cards = [1];
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Home = () => {
  const products = useSelector(getProducts);
  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={3}>
            <ProductCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
