import { render, screen, fireEvent } from '@testing-library/react-native';
import { ToDoList } from '.';
import { ToDoItem } from '../ToDoItem';

describe('<ToDoItem />', () => {
    it('Should be in screen', () => {
        render(<ToDoList />);

        const list = screen.getByText('Criadas');

        expect(list).toBeOnTheScreen();
        expect(list).toBeVisible();
    });
    it('Should render a list of 3 items', () => {
        const DATA = [
            {
                id: 1,
                description: "Uma nova coisa a fazer",
                done: true
            },
            {
                id: 2,
                description: "Uma nova coisa a fazer",
                done: true
            },
            {
                id: 3,
                description: "Uma nova coisa a fazer",
                done: true
            }
        ];

        render(
            <ToDoList 
                data={DATA}
                renderItem={({item}) => <ToDoItem item={item} onPress={() => {}} />}
                keyExtractor={item => item.id} 
            />
        );

        const list = screen.getByTestId('list');
        const items = screen.getAllByLabelText('to-do-item');

        expect(list).toBeOnTheScreen();
        expect(items.length).toEqual(3);
    });
    it('Should render a mensage when list is empty', () => {
        render(
            <ToDoList 
                data={{}}
                renderItem={({item}) => <ToDoItem item={item} onPress={() => {}} />}
                keyExtractor={item => item.id} 
            />
        );

        const item = screen.getByText('Você ainda não tem tarefas cadastradas Crie tarefas e organize seus itens a fazer');

        expect(item).toBeOnTheScreen();  
    })
})