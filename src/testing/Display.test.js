//the display just needs to show what's going on in the dashboard, so a render check would probably be sufficient. 

import React from 'react';
import { render } from '@testing-library/react'
import Display from '../components/Display';

test('renders without crashing', () => {
    render(<Display />);
});