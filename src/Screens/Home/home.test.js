import { render, screen, fireEvent } from '@testing-library/react-native';
import { Home } from '.';

describe('<Home />', () =>{
    it('Should add a new task', () => {
        const NEW_TASK = 'Nova task'

        render(<Home />);

        const input = screen.getByPlaceholderText('Adicione uma nova tarefa');
        const buttonAdd = screen.getByTestId('button-add');

        
        fireEvent.changeText(input, NEW_TASK);
        fireEvent.press(buttonAdd);
        
        const newTask = screen.getByText(NEW_TASK);

        expect(newTask).toBeOnTheScreen();
        expect(newTask).toBeVisible();
    });

    it('Should remove a task', () => {
        
    })
})