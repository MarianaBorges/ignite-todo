import { render, fireEvent, screen } from '@testing-library/react-native';
import { Input } from '.';

describe('<Input />', () =>{
    const onChangeTextMock = jest.fn();

    it('Should be in screen', () => {
        render(<Input placeholder='Adicione uma nova tarefa'/>);

        const input = screen.getByPlaceholderText('Adicione uma nova tarefa');

        expect(input).toBeOnTheScreen();
    })
    it('Should call a function when value of input change', () =>{
        render(
            <Input 
                onChangeText={onChangeTextMock}  
                placeholder='Adicione uma nova tarefa'
            />
        );

        fireEvent.changeText(screen.getByPlaceholderText('Adicione uma nova tarefa'), 'tarefa');

        expect(onChangeTextMock).toHaveBeenCalledWith('tarefa');
    })
})