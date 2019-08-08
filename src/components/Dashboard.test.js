import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';

import { Strike, Ball, Foul, Hit } from './Dashboard';



afterEach(cleanup)

describe('Dashboard.js', () => {
    
    it('displays counts in each function')
    
    describe('Strike()', () =>{
        it('should add 1 to strike total on button press, up to 3, then reset',() =>{
            //expects go here
        });
    });

    describe('Ball()', () =>{
        it('should add 1 to ball total on button press, up to 4, then reset', () =>{

        }); 
    });

    describe('Foul()', () =>{
        it('should add 1 to strike total on button press, unless strike total = 2', () =>{

        });
    });

    describe('Hit()', () =>{
        it('should reset the balls and strikes to zero on button press', () =>{

        });
    });

})
// - provide a button that the person in charge can press every time there is a `strike`, `ball`, `foul` or `hit`.
// - changes recorded on this component should update the information shown by the `Display` component.

