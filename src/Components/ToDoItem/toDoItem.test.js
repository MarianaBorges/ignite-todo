import { render, screen, fireEvent } from '@testing-library/react-native';
import { ToDoItem } from '.';

describe('<ToDoItem />', () => {

    const itemMock = {
        description: 'Item',
        done: false
    }

    const deleteMock = jest.fn();

    it('Should be in visible in Screen',() => {
        render(<ToDoItem item={itemMock} onPress={deleteMock}/>);

        const item = screen.getByText('Item');

        expect(item).toBeOnTheScreen();
        expect(item).toBeVisible();
    });
    it('Should call a function when press delete button', () => {
        render(<ToDoItem item={itemMock} onDelete={deleteMock}/>);

        const buttonDelete = screen.getByTestId('button-delete');
        fireEvent.press(buttonDelete);

        expect(deleteMock).toHaveBeenCalledTimes(1);
    });

    it('Should be a underline style if done', () => {

        itemMock.done = true;

        render(<ToDoItem item={itemMock} onPress={deleteMock}/>);

        const item = screen.getByText('Item');

        expect(item).toHaveStyle({textDecorationLine: 'line-through'});
    });
})