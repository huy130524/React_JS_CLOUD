import { useEffect, useState } from "react";
// import { Product } from "../types/Product";
import axios from "axios";
import { Stack, Box, Container } from "@mui/material";
import ProductCard from "../compoment/ProductCard";
import Header from "../compoment/header";
import Footer from "../compoment/Footer";
import Banner from "../compoment/Banner";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  return (
    <>
     <Header />
<Banner />

<Box
  sx={{
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    mt: 4,
  }}
>
  <Container sx={{ flex: "1 0 auto", mb: 4, mt: 8 }}>
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={3}
    >
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </Stack>
  </Container>
</Box>
<Footer />
    </>
  );
};

export default HomePage;
