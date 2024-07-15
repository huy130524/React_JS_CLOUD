import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Grid } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AddProduct() {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
    rating: ''
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
   
      const response = await axios.post('http://localhost:3000/products', product);
      if (response.status === 201) {
        alert('Product added successfully');
        navigate('/admin');
        // Reset form
        setProduct({
          title: '',
          price: '',
          description: '',
          category: '',
          image: '',
          rating: ''
        });
      } else {
        alert('Failed to add product');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding product');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Add New Product
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={product.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Price"
                name="price"
                type="number"
                value={product.price}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                multiline
                rows={4}
                value={product.description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Category"
                name="category"
                value={product.category}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image URL"
                name="image"
                value={product.image}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Rating"
                name="rating"
                type="number"
                value={product.rating}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Add Product
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}

export default AddProduct;