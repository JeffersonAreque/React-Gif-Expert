import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//Le decimos que haga un completo de este pack
jest.mock("../../src/hooks/useFetchGifs");

describe('Prueba en GifGrid', () => { 

    const category = 'One Punch';

    /* test('Debe de mostrar el loading inicialmente', () => { 

        render( <GifGrid category={category}/>)
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
     }) */

     test('Debe de mostrar items cuando se carga la pagina useFetchGifs', () => { 
        const gifs = [{
            id: 'ABC',
            title: 'Saitama',
            url: 'https://localhost/saitama.jpg'
        },
        {
            id: '123',
            title: 'Goku',
            url: 'https://localhost/goku.jpg'
        },
    ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render( <GifGrid category={category}/>)
        expect(screen.getAllByRole('img').length).toBe(2);
      })
 })