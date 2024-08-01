import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { FaPlus } from 'react-icons/fa';
import { RiLoader2Fill } from 'react-icons/ri';
import { BsExclamationDiamond } from 'react-icons/bs';
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { BiCalendar } from 'react-icons/bi';// Import your basic date picker component
import BasicDatePicker from './datePicker';

export default function CreateNewTask() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [statusValue, setStatusValue] = useState('');
  const [priorityValue, setPriorityValue] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const stopPropagation = (event: React.MouseEvent | React.KeyboardEvent) => {
    event.stopPropagation();
  };

  const handleStatusChange = (event: SelectChangeEvent<string>) => {
    setStatusValue(event.target.value as string);
  };

  const handlePriorityChange = (event: SelectChangeEvent<string>) => {
    setPriorityValue(event.target.value as string);
  };

  const handleDateChange = (newDate: Date | null) => {
    setSelectedDate(newDate);
  };

  const drawerContent = (
    <Box sx={{ width: 500 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <div className="flex flex-col gap-3 p-4">
        <button className="rotate-45 p-2 bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center" onClick={toggleDrawer(false)}>
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
          <Select
            value={statusValue}
            onClick={stopPropagation}
            className="w-40 border-none focus-within:border-none focus-within:outline-none"
            required
            onChange={handleStatusChange}
          >
            <MenuItem value={10}>To do</MenuItem>
            <MenuItem value={20}>In progress</MenuItem>
            <MenuItem value={30}>Under Review</MenuItem>
            <MenuItem value={40}>Finished</MenuItem>
          </Select>
        </div>
        <div className="flex gap-2 items-center">
          <BsExclamationDiamond />
          <label>Priority</label>
          <Select
            value={priorityValue}
            onClick={stopPropagation}
            className="w-40 border-none focus-within:border-none focus-within:outline-none"
            required
            onChange={handlePriorityChange}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value={1}>LOW</MenuItem>
            <MenuItem value={2}>MEDIUM</MenuItem>
            <MenuItem value={3}>URGENT</MenuItem>
          </Select>
        </div>
        <div className="flex gap-2 items-center">
          <BiCalendar />
          <label>Deadline</label>
          <BasicDatePicker/>
        </div>
      </div>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button variant="contained" color="primary" onClick={toggleDrawer(true)}>
        Create New Task
      </Button>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </div>
  );
}
