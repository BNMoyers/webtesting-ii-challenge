//the display just needs to show what's going on in the dashboard, so a render check would probably be sufficient. 

import React from 'react';
import { render } from '@testing-library/react'
import Display from '../components/Display';
import App from '../App';

test('renders without crashing', () => {
    render(<Display />);
});

test('ball count is found', () => {
    const { getByText } = render(<App />);
    getByText(/Balls/i);
})

test('strike count is found', () =>{
    const { getByText } = render(<App />);
    getByText(/Strikes/i);
} )