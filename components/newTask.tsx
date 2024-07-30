import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { FaPlus } from 'react-icons/fa';
import { RiLoader2Fill } from 'react-icons/ri';
import { BsExclamationDiamond } from 'react-icons/bs';
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';

export default function CreateNewTask() {
  const [state, setState] = React.useState({
    right: false,
  });

  const [selectValue, setSelectValue] = React.useState('');

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

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setSelectValue(event.target.value as string);
  };

  const list = (anchor: 'right') => (
    <Box
      sx={{ width: 500 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="flex flex-col gap-3 p-4">
        <button
          className="rotate-45 p-2 bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center"
          onClick={toggleDrawer('right', false)}
        >
          <FaPlus />
        </button>
        <input
          onClick={stopPropagation}
          onKeyDown={stopPropagation}
          className="p-2 focus-within:outline-none h-16 rounded"
          placeholder="Title"
        />
        <div className="flex gap-2 items-center">
          <RiLoader2Fill />
          <label>Status</label>
          <Select value={selectValue} onClick={stopPropagation} className='w-40 border-none focus-within:border-none 
          focus-within:outline-none' onChange={handleSelectChange}>
            <MenuItem value="">
            </MenuItem>
            <MenuItem value={10}>To do</MenuItem>
            <MenuItem value={20}>In progress</MenuItem>
            <MenuItem value={30}>Under Review</MenuItem>
            <MenuItem value={40}>Finished</MenuItem>
          </Select>
        </div>
        <div className="flex gap-2 items-center">
          <BsExclamationDiamond />
          <label>Priority</label>
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
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {list('right')}
      </Drawer>
    </div>
  );
}

