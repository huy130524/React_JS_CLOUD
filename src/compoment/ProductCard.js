import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2, boxShadow: 3 }}>
      <CardActionArea>
        {product.image && <CardMedia
           component="img"
           image={product.image}
           alt={product.name}
           sx={{
             objectFit: 'cover', // Đảm bảo ảnh bao phủ đều không mất tỉ lệ
             width: '100%' // Đảm bảo ảnh bao phủ toàn bộ chiều rộng của card
           }}
        />}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            {product.name}
          </Typography>
          
          <Typography variant="body1" color="text.primary" sx={{ fontWeight: 'medium' }}>
            Price: ${product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
            {product.description}
          </Typography>
          <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button size="small" component={Link} to={`/products/${product.id}`}>
          Xem chi tiết
        </Button>
        <Button size="small" variant="contained" color="primary">
          Mua ngay
        </Button>
      </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;