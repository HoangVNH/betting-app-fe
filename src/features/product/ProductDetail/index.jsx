import './styles.scss';
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailById, selectProductDetailData } from "../productSlice";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Typography,
  Container,
  Box,
  Grid,
  CardContent
} from "@mui/material";
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { productId } = params;

  const productDetail = useSelector(selectProductDetailData);
  console.log("ProductDetail: ", productDetail);
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

  useEffect(() => {
    dispatch(getProductDetailById(productId));
  }, [dispatch, productId])

  return (
    <div>
      {
        productDetail && (
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
                  {productDetail.name}
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
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box
                    xs={6}
                    component="div"
                    sx={{
                      display: 'flex',
                      flexDirection: "column"
                    }}>
                    <div
                      className="big-img"
                    >
                      <img
                        src={productDetail?.Auctions[bigImageIndex]?.imagePath}
                        alt="random"
                      />
                    </div>
                    <div className="thumb" ref={activeThumbRef}>
                      {
                        productDetail?.Auctions.map(({ imagePath, imageName }, index) => (
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
                </Grid>
                <Grid item xs={6}>
                  <CardContent>
                    <Typography
                      component="div"
                      sx={{
                        margin: '12px 0 12px',
                        minWidth: '0px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        flex: '1 1 0%',
                        width: '250px',
                        fontSize: '16px',
                        fontWeight: 500,
                        color: 'rgb(30, 35, 41)'
                      }}>
                      nsdcns dcn
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '4px'
                      }}>
                      <Typography
                        component="div"
                        className="product-card__text"
                      >
                        Current bid
                      </Typography>
                      <Typography
                        component="div"
                        sx={{
                          color: '#1e2329',
                          fontSize: '16px',
                          fontWeight: 500
                        }}
                      >
                        VND {Number(productDetail?.Auctions[0]?.initPrice).toLocaleString('en-US')}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '4px'
                      }}>
                      <Typography
                        component="div"
                        className="product-card__text"
                      >
                        Bidder
                      </Typography>
                      <Typography
                        component="div"
                        className="product-card__text"
                      >
                        {productDetail?.Auctions[0]?.BiddingLogs[0]?.User.firstName} {productDetail?.Auctions[0]?.BiddingLogs[0]?.User.lastName}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '4px'
                      }}
                    >
                      <Typography
                        component="div"
                        className="product-card__text"
                      >
                        Price
                      </Typography>
                      <Typography
                        component="div"
                        sx={{
                          color: '#1e2329',
                          fontSize: '16px',
                          fontWeight: 500
                        }}
                      >
                        VND {Number(productDetail?.Auctions[0]?.initPrice).toLocaleString('en-US')}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '4px'
                      }}
                    >
                      <Typography
                        component="div"
                        className="product-card__text"
                      >
                        Posted
                      </Typography>
                      <Typography component="div">
                        {productDetail.Auctions[0]?.createdAt.slice(0, 10)}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '4px'
                      }}>
                      <Typography
                        component="div"
                        className="product-card__text"
                      >
                        Ends in
                      </Typography>
                      <Typography
                        component="div"
                      >
                        {productDetail?.Auctions[0]?.endedAt.slice(0, 10)}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}>
                    </Box>
                  </CardContent>
                </Grid>
              </Grid>
            </Box>
          </Container>
        )
      }
    </div>
  );
};

export default ProductDetail;
