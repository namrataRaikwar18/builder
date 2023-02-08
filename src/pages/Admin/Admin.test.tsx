import {render, screen} from '@testing-library/react';
import { Admin } from './Admin';

describe('testing Admin page', () => {
    test('should present all register username', () => {
        render(<Admin/>)
        const headingElement = screen.getByText(/All Registered Username:/i)
        expect(headingElement).toBeInTheDocument()  
    })
})