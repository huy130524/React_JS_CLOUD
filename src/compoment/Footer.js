import { Box, Typography, Link, Container, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#333', color: '#fff', py: 3 }}>
    <Container maxWidth="md">
      <Grid container spacing={2} alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="body2">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Grid>
        <Grid item>
          <Link href="#" color="inherit" sx={{ mr: 2 }}>
            About Us
          </Link>
          <Link href="#" color="inherit" sx={{ mr: 2 }}>
            Contact Us
          </Link>
          <Link href="#" color="inherit">
            Privacy Policy
          </Link>
        </Grid>
        <Grid item>
          <Typography variant="body2">
            Made with ❤️ in India
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
  );
};

export default Footer;
