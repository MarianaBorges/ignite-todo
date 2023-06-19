import { render, screen, fireEvent } from '@testing-library/react-native';
import { Alert } from '.';

describe('<Alert />', () => {
    const onPressYesMock = jest.fn();
    const onPressNoMock = jest.fn();

    it('Should be in the screen and not visible', () => {
        render(<Alert />)

        const alert = screen.getByTestId('alert-modal');

        expect(alert).toBeOnTheScreen();
        expect(alert).not.toBeVisible();
    });

    it('Should be in the screen and visible', () => {
        render(<Alert isVisible={true}/>)

        const alert = screen.getByTestId('alert-modal');

        expect(alert).toBeOnTheScreen();
        expect(alert).toBeVisible();
    });

    it('Should tap a yes button e call a function', () => {
        render(<Alert isVisible={true} onConfirm={onPressYesMock}/>)

        const alertButton = screen.getByText('Sim');

        fireEvent.press(alertButton);

        expect(onPressYesMock).toHaveBeenCalledTimes(1);
    });

    it('Should tap a no button e call a function', () => {
        render(<Alert isVisible={true} onCancel={onPressNoMock}/>)

        const alertButton = screen.getByText('Não');

        fireEvent.press(alertButton);

        expect(onPressYesMock).toHaveBeenCalledTimes(1);
    });
});