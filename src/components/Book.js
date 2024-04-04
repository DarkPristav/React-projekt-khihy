import './Book.css';
import OrderButton from './OrderButton.js';

const Book = ({bookTitle, bookDesc, bookHodno, bookPrice, bookImage}) => {
  return (
      <div className='book-item'>
          <h2>{bookTitle}</h2>
          <p>{bookDesc}</p>
          <p>Hodnocení: {bookHodno} / 10 </p>
          <p className='book-price'>{bookPrice} Kč</p>
          <img src={bookImage} alt="kniha" />
          <OrderButton />
      </div>
  )
}

export default Book