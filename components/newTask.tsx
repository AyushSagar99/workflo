import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { CgCross } from 'react-icons/cg';
import { FaPlus } from 'react-icons/fa';
import { RiLoader2Fill } from 'react-icons/ri';

export default function CreateNewTask() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: 'right', open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const stopPropagation = (event: React.MouseEvent | React.KeyboardEvent) => {
    event.stopPropagation();
  };

  const list = (anchor: 'right') => (
    <Box
      sx={{ width: 500 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className='flex flex-col gap-3 p-4'>
        <button 
          className='rotate-45 p-2 bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center'
          onClick={toggleDrawer('right', false)}
        >
          <FaPlus />
        </button>
        <input 
          onClick={stopPropagation} 
          onKeyDown={stopPropagation} 
          className='p-2 focus-within:outline-none h-16 rounded'
          placeholder='Title'
        />
        <div className='flex gap-2 items-center'>
        <RiLoader2Fill />
        <label>Status</label>
        </div>
      </div>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button variant="contained" color="primary" onClick={toggleDrawer('right', true)}>
        Create New Task
      </Button>
      <Drawer
        anchor='right'
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
    </div>
  );
}
