import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker() {
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div onClick={handleClick}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker label="Basic date picker" />
        </DemoContainer>
      </div>
    </LocalizationProvider>
  );
}
