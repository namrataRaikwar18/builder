import {render, screen } from '@testing-library/react';
import { NotificationBar } from './NotificationBar';

describe('testing NotificationBar', () => { 
    test('should present heading', () => {
        render(<NotificationBar notificationBar={false} setnotificationBar={()=>{} } />)
        const headingElement = screen.getByText(/Notifications/i)
        expect(headingElement).toBeInTheDocument()
    })
})