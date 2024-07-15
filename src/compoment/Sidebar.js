
import { Box, Drawer,  List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
const Sidebar = () => {


  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240, // Chiều rộng của Drawer
        '& .MuiDrawer-paper': {
          width: 240,
          backgroundColor: 'gray', // Màu nền của Drawer
          color: 'white', // Màu chữ trong Drawer
        },
      }}
    >
      <List>
        
          <ListItem sx={{ paddingTop: 5 }}>
          <Box sx={{ display: 'flex',width: '100%', textAlign: 'center', flexDirection: 'column' }}>
       <ListItem sx={{fontWeight:300, fontSize:30,}} component={RouterLink} to="/" >Home</ListItem>
       <ListItem sx={{fontWeight:300, fontSize:30,}} component={RouterLink} to="/" >Product</ListItem>
       <ListItem sx={{fontWeight:300, fontSize:30,}} component={RouterLink} to="/" >Users</ListItem>
      
      </Box>
          </ListItem>
   
      </List>
    </Drawer>
  );
};

export default Sidebar;
