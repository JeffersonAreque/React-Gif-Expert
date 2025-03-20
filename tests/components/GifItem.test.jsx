import { GifItem } from "../../src/components/GifItem"
import { render, screen } from "@testing-library/react";

describe('Pruebas en GifItem', () => { 
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg'
    
    test('Debe de hacer match con el snapshot', () => { 
        
        const { container  } = render(<GifItem title={title} url={url} />) 

        expect( container ).toMatchSnapshot();
     })

     test('Debe de mostrar la imagen con el url y el ALT indicado', () => { 
        render( <GifItem title={title} url={url}/>)
        //screen.debug();

        /* Pruebas de codigo largo */
        //expect(screen.getByRole('img').src).toBe(url); 
        //expect(screen.getByRole('img').alt).toBe(title);        

        /* Pruebas de codigo mas limpio */
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
      })

      test('Debe mostrar el titulo en el componente', () => { 
        render( <GifItem title={title} url={url}/>)

        expect(screen.getByText(title)).toBeTruthy();
       })
 })