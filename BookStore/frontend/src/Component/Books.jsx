import React from "react";
import { useState, useEffect } from "react";
import "./Books.css";
import { AiOutlineHeart, AiOutlineLike } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsBook } from "react-icons/bs"
import { FiEdit } from "react-icons/fi";
import DefBook from "./DeFBook";
import { Link } from "react-router-dom";

function Books() {
  const [posts, setPosts] = useState([]);

  async function getData() {
    try {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const deleteProduct = async (Id) => {
    let result = await fetch(`http://localhost:5000/product/${Id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) getData();
  };

  const handleChange = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`)
      result = await result.json()
      if (result) setPosts(result)
    } else {
      getData()
    }
  }

  return (
    <div className="Book-main-cont">
      <h1>Buy and Sell Books</h1>
      <div className="symbol">
        <hr className="left" />
        < BsBook className="book-symbol" />
        <hr className="right" />
      </div>
      <div className="search-container">
        <input type="text" className="search-input"
          placeholder="Search Books..." onChange={(e) => handleChange(e)}
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="Book-container">
        {posts.map((book) => (
          <div key={book._id} className="card-container">
            <img src={book.image} alt="book" />
            <div className="card-info">
              <h3 className="book-name">{book.name}</h3>
              <p className="book-price"> {`$${book.price}`} </p>
              <div>
                <button className="btn">Buy Now</button>
                <span className="favorite">
                  <AiOutlineHeart />
                </span>
                <span className="update-btn like-btn">
                  <AiOutlineLike />
                </span>
                <button
                  className="delete-btn"
                  onClick={() => deleteProduct(book._id)}
                >
                  <RiDeleteBin6Line />
                </button>
                <button className="update-btn">
                  <Link to={`/update/${book._id}`} className="update-link">
                    <FiEdit />
                  </Link>
                </button>
              </div>
            </div>
            <div className="card-desc">
              <p>{book.description}</p>
            </div>
          </div>
        ))}
        <DefBook />
      </div>
    </div>
  );
}

export default Books;
