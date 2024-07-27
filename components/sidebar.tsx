import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { CiCirclePlus } from 'react-icons/ci';

const drawerWidth = 240;

export default function Sidebar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Home', 'Boards', 'Settings', 'Teams','Analytics'].map((text, index) => (
            
              <ListItem key={text} disablePadding>
                
                <ListItemButton>
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
            <button className='flex justify-center items-center ml-10 gap-2 bg-indigo-600
             text-white p-2 rounded-md'>Create New Task <CiCirclePlus /> </button>
            
          </List>
          
          
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
