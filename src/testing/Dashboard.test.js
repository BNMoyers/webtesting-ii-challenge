import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Dashboard from '../components/Dashboard'

test('call the onClick when button is pressed', () =>{
    const onClick = jest.fn();
    const { getByText } = render(<Dashboard ball={onClick} />)
        
    fireEvent.click(getByText(/ball/i))
    expect(onClick).toHaveBeenCalled();
})