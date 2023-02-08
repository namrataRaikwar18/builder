import {render, screen} from '@testing-library/react';
import { Navbar } from './Navbar';

describe('navbar testing', () => {
    test('should present notification ', () => {
        render(<Navbar/>)
        const notificationBtn = screen.getByTestId('notificationBtn')
        expect(notificationBtn).toBeInTheDocument()
    })
})

