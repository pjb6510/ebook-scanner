import React, { ChangeEventHandler, useState } from 'react';
import { Input } from './Input';
import { Label } from './Label';

interface InputPageNumberProps {
  min: number;
  max: number;
  labelText: string;
}

export function InputPageNumber({ min, max, labelText }: InputPageNumberProps) {
  const [pageNumber, setPageNumber] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value === '') {
      setPageNumber('');
      return;
    }

    const numericValue = Number(e.target.value);
    if (isNaN(numericValue)) {
      return;
    }

    if (numericValue < min || numericValue > max) {
      return;
    }

    setPageNumber(e.target.value);
  };

  return (
    <Label>
      {labelText}
      <Input type="text" onChange={handleChange} value={pageNumber} />
    </Label>
  );
}
