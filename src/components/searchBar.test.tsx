import React from 'react'
import {render} from '@testing-library/react'
import { ditto } from '../testing/data/ditto'
import SearchResults from "./searchResults"

// test("Show Pokemon Name", () =>{
//     const {queryByText} = render(<SearchResults pokemon={ditto} />)
//     expect(queryByText(ditto.name)).toBeInTheDocument()
// })

// test("Show Pokemon Image", () =>{
//     const { queryByAltText } = render(<SearchResults pokemon={ditto} />)
//     expect(queryByAltText(ditto.name)).toBeInTheDocument()
// })

// test("Show Pokemon Ablilties", () =>{
//     const { queryByText } = render(<SearchResults pokemon={ditto}/>)
//     expect(queryByText(ditto.abilities[0].ability.name)).toBeInTheDocument()
// })

// test("Pokemon Not Found" ,() =>{
//     const { queryByText } = render(<SearchResults pokemon={null}/>)
//     expect(queryByText("No Pokemon Found"))
// })
