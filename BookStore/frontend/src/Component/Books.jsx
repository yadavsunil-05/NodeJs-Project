import React from 'react'
import { useState, useEffect } from "react"

function Books() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("http://localhost:5000/products")
        const data = await response.json()
        setPosts(data)
      }
      catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);


  return (
    <div style={{ height: "100vh" }}>
      <div>
        <div>
          {
            posts.map(book => (
              <div key={book._id}>
                <img src={book.image} alt="book" style={{ height: "100px" }} />
                <div>
                  <p>{book.name}</p>
                  <p>{book.price}</p>
                  <p>{book.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Books