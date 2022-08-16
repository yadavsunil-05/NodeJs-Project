import React from 'react'
import { useState, useEffect } from "react"
import "./Books.css"
import { AiOutlineHeart, AiOutlineLike } from "react-icons/ai"

function DefBooks() {
  const [defbook, setdefbook] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=IXBbNiIjysJqSzN25AcCsO9udG9W0wze")
        const data = await response.json()
        setdefbook(data.results.books.slice(5, data.results.books.length).reverse())
      }
      catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);


  return (<>
    {
      defbook.map((book, indx) => (
        <div key={indx} className="card-container">
          <img src={book.book_image} alt="book" />
          <div className="card-info">
            <h3 className='book-name'>{book.title}</h3>
            < p p className='book-price' > {`$${book.book_image_width}`
            } </p >
            <div>
              <button className='btn'>Buy Now</button>
              <span className='favorite'><AiOutlineHeart /></span>
              <span className='update-btn like-btn'><AiOutlineLike /></span>
            </div>
          </div >
          <div className="card-desc">
            <p>{book.description}</p>
          </div>
        </div >
      ))
    }
  </>
  )
}

export default DefBooks