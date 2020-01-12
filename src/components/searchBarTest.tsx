import React from 'react'
import {render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchBar } from "./searchBar"

test("Can get pokemon name on submit", () =>{
    let pokemonName= ''
    const { getByRole } = render(<SearchBar onSearch={(name) => pokemonName + name} />)
    userEvent.type(getByRole('textbox'), 'pichaku')
    userEvent.click(getByRole('button'))
    expect(pokemonName).toBe('pichaku')
})



