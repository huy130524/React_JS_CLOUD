
import { Box, Paper, Typography } from '@mui/material'

const Banner = () => {
  return (
    <div >
       
       <Paper 
      sx={{
        mt: 5,
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(https://dojeannam.com/wp-content/uploads/2017/10/banner-thoi-trang-nam-cong-so-2018.jpg)`, // Thay URL bằng đường dẫn tới hình ảnh của bạn
        height: 400,
      }}
    >
      {/* Tạo lớp phủ màu đen mờ để tăng độ tương phản cho chữ */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Box
        sx={{
          position: 'relative',
          p: { xs: 3, md: 6 },
          pr: { md: 0 },
        }}
      >
        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
         
        </Typography>
        <Typography variant="h5" color="inherit" paragraph>
          
        </Typography>
      </Box>
    </Paper>
    </div>
  )
}

export default Banner