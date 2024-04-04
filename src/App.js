import { Fragment } from 'react'

import Book from './components/Book.js';
import './App.css';
import data from './data.js'

const App = () => {
  return (
    <Fragment className='all-books'>
      <Book bookTitle={data[0].title} bookPrice={data[0].price} bookImage={data[0].image} bookDesc={data[0].desc} bookHodno={data[0].hodno}/>
      <Book bookTitle={data[1].title} bookPrice={data[1].price} bookImage={data[1].image} bookDesc={data[1].desc} bookHodno={data[1].hodno}/>
      <Book bookTitle={data[2].title} bookPrice={data[2].price} bookImage={data[2].image} bookDesc={data[2].desc} bookHodno={data[2].hodno}/>
      <Book bookTitle={data[3].title} bookPrice={data[3].price} bookImage={data[3].image} bookDesc={data[3].desc} bookHodno={data[3].hodno}/>
      <Book bookTitle={data[4].title} bookPrice={data[4].price} bookImage={data[4].image} bookDesc={data[4].desc} bookHodno={data[4].hodno}/>
    </Fragment>
  )
}


export default App


// komponenta má stejný název jako je název souboru
// komponenta obsahuje return
// v return musí něco být
// na konci souboru musí být řádek s exportem
