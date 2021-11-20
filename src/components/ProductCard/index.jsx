import './styles.scss';

import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Link
} from '@mui/material';
import { Link as RouterLink } from "react-router-dom";

const ProductCard = ({ prd }) => {
  return (
    <Link
      component={RouterLink}
      to={`product/${prd.id}`}
      underline="none"
    >
      <Card
        sx={{
          maxWidth: 345,
          margin: 0,
          minWidth: '0px',
          transition: 'all 0.3s ease 0s',
          backgroundColor: '#FFF',
          borderRadius: '12px',
          '&:hover': {
            boxShadow: 'rgb(0 0 0 / 10%) 0px 0px 15px'
          },
        }}

      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="155"
          image={prd.imagePath}
          sx={{
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        />
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
            {prd.name}
          </Typography>
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
              VND {Number(prd.Auctions[0]?.initPrice).toLocaleString('en-US')}
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
              VND {Number(prd.Auctions[0]?.initPrice).toLocaleString('en-US')}
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
              {prd.Auctions[0]?.BiddingLogs[0]?.User.firstName} {prd.Auctions[0]?.BiddingLogs[0]?.User.lastName}
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
              {prd.Auctions[0]?.createdAt.slice(0, 10)}
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
              {prd.Auctions[0]?.endedAt?.slice(0, 10)}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
            {/* <Typography
              component="div"
            >
              Bidded
            </Typography>
            <Typography
              component="div"
              className="product-card__text"
            >
              5
            </Typography> */}
          </Box>
        </CardContent>
      </Card >
    </Link>

  );
};

export default ProductCard;
