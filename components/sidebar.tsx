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
import { CiCirclePlus, CiSettings, CiViewBoard } from 'react-icons/ci';
import { SlSettings } from 'react-icons/sl';
import { HiHome } from 'react-icons/hi';
import { AiOutlineStock, AiOutlineTeam } from 'react-icons/ai';
import CreateNewTask from './newTask';

const drawerWidth = 240;

export default function Sidebar() {
  return (
    <Box sx={{ display: 'flex' }}  >
      
      
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
                    {index ===0 ? <HiHome/> : null}
                    {index ===1 ? <CiViewBoard /> : null}
                    {index ===2 ? <SlSettings/> : null}
                    {index ===3 ? <AiOutlineTeam /> : null}
                    {index ===4 ? <AiOutlineStock /> : null}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
            <CreateNewTask/>
          </List>
          
          
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
