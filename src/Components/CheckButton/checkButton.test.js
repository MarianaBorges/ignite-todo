import { render, screen, fireEvent } from '@testing-library/react-native';
import { CheckButton } from '.';

describe('<CheckButton />', () => {
    const onPressMock = jest.fn();

    it('Should call a function when press', () => {
        render(<CheckButton onPress={onPressMock} />);

        const button = screen.getByTestId('check-button');
        fireEvent.press(button);

        expect(onPressMock).toHaveBeenCalledTimes(1);
    });

    it('Should show check icon if props is true', () =>{
        render(<CheckButton checked={true} onPress={onPressMock} />);

        const button = screen.getByTestId('check-icon');

        expect(button).toBeOnTheScreen();
        expect(button).toBeVisible();
    });

    it('Should show circle icon', () =>{
        render(<CheckButton onPress={onPressMock} />);

        const button = screen.getByTestId('circle-icon');

        expect(button).toBeOnTheScreen();
        expect(button).toBeVisible();
    });
})