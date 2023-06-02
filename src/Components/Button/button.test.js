import { render, screen, fireEvent } from '@testing-library/react-native';
import { Button } from '.';

describe('<Button />', () => {
    it('Shuld be in the screen', () => {
        render(<Button />)

        const button = screen.getByTestId('button-add');

        expect(button).toBeOnTheScreen();
        expect(button).toBeVisible();
    });
    it('Should call a function when tapping', () => {
        const onPressMock = jest.fn();
        render(<Button onPress={onPressMock}/>)

        const button = screen.getByTestId('button-add');

        fireEvent.press(button);
        expect(onPressMock).toHaveBeenCalledTimes(1);
    })
})