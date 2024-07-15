import React from 'react'

import { Box, Button, CardMedia, Drawer, Grid, Link, List, ListItem, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Link as RouterLink } from "react-router-dom";
import axios from 'axios';
import  { useEffect, useState } from 'react'
import { Padding } from '@mui/icons-material';
import Sidebar from './Sidebar';
const Listproduct = () => {
  const [products, setProducts] = useState(null);

  const getAllProduct = async () => {
    const { data } = await axios.get("http://localhost:3000/products");
    setProducts(data);
    
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const handleDelete = async (productId) => {
    // Yêu cầu xác nhận trước khi xóa
    const isConfirmed = window.confirm(`Bạn có chắc chắn muốn xóa sản phẩm này không ?`);
    if (!isConfirmed) {
      return; 
    }
    try {
      // Gọi API xóa sản phẩm, thay thế 'yourApiEndpoint' bằng endpoint thực tế
      const res = await fetch(`http://localhost:3000/products/${productId}`, { method: 'DELETE' });
      if (res.ok) {
        alert(`Xóa sản phẩm  thành công.`);
        console.log(` ${productId}`);
        getAllProduct();
      } else {
        alert('Có lỗi xảy ra khi xóa sản phẩm.');
      }
    } catch (error) {
      console.error('Lỗi khi gọi API xóa sản phẩm:', error);
      alert('Có lỗi xảy ra, không thể xóa sản phẩm.');
    }
  };
  return (
    <>
    <Sidebar />
      <Box sx={{ display: 'block', paddingLeft: 30 }}>
        <Grid container spacing={2}>
          <Grid item xs>
            <Box sx={{ padding: '16px' }}>
              <h2>Product List</h2>
              <Button size="small"  variant="contained" color="success"  component={RouterLink}
                to={`/admin/add`} >
                Thêm sản phẩm
              </Button>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Image</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {products?.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>{product.id}</TableCell>
                        <TableCell>{product.title}</TableCell>
                        <CardMedia
                          component="img"
                          height="140"
                          image={product.image}
                          alt="Placeholder Image"
                        />
                        <TableCell>{product.description}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>
                          <ListItem sx={{ justifyContent: 'center', padding: '8px' }}>
                            <Button size="small" variant="contained" color="primary" component={RouterLink}
                              to={`/admin/edit/${product.id}`} >
                              Edit
                            </Button>
                            <ListItem sx={{ justifyContent: 'center', padding: '8px' }}>
                              <Button size="small" variant="contained" color="error"
                              onClick={() => handleDelete(product.id)}
                              >
                                Delete
                              </Button>
                            </ListItem>

                          </ListItem>
                        </TableCell>

                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Listproduct