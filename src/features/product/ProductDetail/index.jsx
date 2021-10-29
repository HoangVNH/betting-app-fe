import React from "react";
import {
  Typography,
  Container,
  Box
} from "@mui/material";

const ProductDetail = () => {
  return (
    <Container sx={{ marginTop: '24px' }} maxWidth="lg">
      <Box component="section">
        <Box component="div">
          <Typography
            component="h1"
            variant="h5"
            sx={{
              fontSize: '24px',
              marginBottom: '0.5em'
            }} >
            Product name
          </Typography>
          <Typography
            component="h1"
            variant="h5"
            sx={{
              fontSize: '18px'
            }}>
            Category
          </Typography>
        </Box>
      </Box>

    </Container>
  );
};

export default ProductDetail;
