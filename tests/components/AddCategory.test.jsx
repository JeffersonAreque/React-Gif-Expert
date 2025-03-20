import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en AddCategory', () => { 
    test('Debe de cambiar el valor de la caja de texto', () => { 
        
        //Se crea el sujeto de Pruebas
        render( <AddCategory onNewCategory={ () => {}}/>)

        //Se extre el input
        const input = screen.getByRole('textbox');

        /* Disparamos el evento eventos */
        fireEvent.input(input, { target: { value: 'Saitama'}})

        /* Aserciones de lo que experamos que suceda */
        expect(input.value).toBe('Saitama');
     })

     test('Debe de llamar onNewCategory si el input tiene el valor', () => { 
        
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory= {onNewCategory} />)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        //screen.debug();
        expect(input.value).toBe('');

        /* onSubmit */
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

      })

      test('No debe de llamar el onNewCategory si el input esta vacio', () => { 

        const onNewCategory = jest.fn();

        render( <AddCategory  onNewCategory={onNewCategory}/>)

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
       })
 })