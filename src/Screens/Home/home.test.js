import { render, screen, fireEvent } from '@testing-library/react-native';
import { Home } from '.';

const NEW_TASK = 'Nova task'

const addNewTask = (quant=1) => {
    const input = screen.getByPlaceholderText('Adicione uma nova tarefa');
    const buttonAdd = screen.getByTestId('button-add');

    for (let index = 0; index < quant; index++) {
        fireEvent.changeText(input, NEW_TASK);
        fireEvent.press(buttonAdd);
    }
}

const finishTask = () => {
    const checkButton = screen.getAllByTestId('check-button');

    fireEvent.press(checkButton[0]);
}

describe('<Home />', () =>{

    beforeEach(() => {
        render(<Home />);
    });

    it('Should add a new task', () => {
        addNewTask();
        
        const newTask = screen.getByText(NEW_TASK);

        expect(newTask).toBeOnTheScreen();
        expect(newTask).toBeVisible();
    });

    /*it('Should remove a task', () => {
        const NEW_TASK = 'Nova task'

        render(<Home />);

        const input = screen.getByPlaceholderText('Adicione uma nova tarefa');
        const buttonAdd = screen.getByTestId('button-add');

        
        fireEvent.changeText(input, NEW_TASK);
        fireEvent.press(buttonAdd);

        const buttonRemove = screen.queryAllByTestId('button-delete');
    
        fireEvent.press(buttonRemove[0]);

        const buttonYes = screen.getByText('SIM')

        fireEvent.press(buttonYes);

        //expect(buttonRemove[0]).not.toBeOnTheScreen();
        //expect(buttonRemove[0]).not.toBeVisible();
    })*/

    it('Should show task is concluded', () => {
        addNewTask();

        finishTask();

        const newTask = screen.getByText(NEW_TASK);

        expect(newTask).toHaveStyle({textDecorationLine: 'line-through'});
    });

    it('Should show count of tasks created', ()=>{
        addNewTask(2);

        const createdCount = screen.getByTestId('count-created');

        expect(createdCount).toHaveTextContent('2');
    });

    it('Should show count of tasks concluded', ()=>{
        addNewTask(2);

        finishTask();

        const createdCount = screen.getByTestId('count-concluded');

        expect(createdCount).toHaveTextContent('1');
    })
})