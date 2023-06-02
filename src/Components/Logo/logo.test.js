import { render, screen } from '@testing-library/react-native';
import { Logo } from '.';

describe('<Logo />', () => {
    it('Should show logo image', () => {
        render(<Logo />);

        const item = screen.getByTestId('logoId');

        expect(item).toBeOnTheScreen();
        expect(item).toBeVisible();
    })
})