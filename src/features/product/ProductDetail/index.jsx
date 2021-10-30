import './styles.scss';

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Typography,
  Container,
  Box
} from "@mui/material";

const ProductDetail = () => {
  const [product] = useState({
    id: 1,
    name: "Jordan 1 Mid Light Smoke Grey",
    images: [
      {
        imageName: 'random',
        imagePath: 'https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=fb86e2e09fceac9b363af536b93a1275',
      },
      {
        imageName: 'random',
        imagePath: 'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515',
      }
    ],
    auction: {
      initPrice: 1,
      stepPrice: 5,
      isAllowNewBidder: true,
      endedAt: '',
      biddedBy: ''
    }
  });
  const [bigImageIndex, setBigImageIndex] = useState(0);
  const activeThumbRef = useRef();

  const handleChangeTab = useCallback((index) => {
    setBigImageIndex(index);

    const images = activeThumbRef.current.children;

    for (let i = 0; i < images?.length; i++) {
      images[i].className = images[i].className.replace('active', '');
    }

    images[index].className = 'active';
  }, []);

  useEffect(() => {
    activeThumbRef.current.children[bigImageIndex].className = 'active';
  }, [bigImageIndex]);

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
            {product.name}
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
        <Box
          component="div"
          sx={{
            display: 'flex',
            flexDirection: "column"
          }}>
          <div
            className="big-img"
          >
            <img
              src={product.images[bigImageIndex]?.imagePath}
              alt="random"
            />
          </div>
          <div className="thumb" ref={activeThumbRef}>
            {
              product.images.map(({ imagePath, imageName }, index) => (
                <img
                  src={imagePath}
                  alt={imageName}
                  key={index}
                  onClick={() => handleChangeTab(index)}
                />
              ))
            }
          </div>
        </Box>
      </Box>

    </Container>
  );
};

export default ProductDetail;
