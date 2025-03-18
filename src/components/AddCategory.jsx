import { useState } from 'react'



export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;
        
        /* onNewCategory( categories =>  [inputValue, ...categories]); */
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }
  return (

    <form onSubmit={ onSubmit /* (event) => onSubmit(event) */}>
        <input 
            type="text" 
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
