import React from 'react';
import { render, cleanup } from '@testing-library/react';
import  '@testing-library/jest-dom'

import Dashboard from './Dashboard';



afterEach(cleanup);

describe('Dashboard.js', () => {
    
    it('displays counts in each function', () =>{
        const { getByTestId } = render(<Dashboard />)
        expect(getByTestId('count')).toHaveTextContent('0')
    });
    
   

})
// - provide a button that the person in charge can press every time there is a `strike`, `ball`, `foul` or `hit`.
// - changes recorded on this component should update the information shown by the `Display` component.

