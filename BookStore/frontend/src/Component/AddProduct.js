import React, { useState } from "react";
import "./AddProduct.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddProduct() {
  const [name, setBName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDesc] = useState("");
  const [image, setImage] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    if (name && price && description && image) {
      let userId = JSON.parse(localStorage.getItem("user"));
      userId = userId._id;
      let result = await fetch("http://localhost:5000/add-product", {
        method: "Post",
        body: JSON.stringify({
          name,
          price,
          description,
          image,
          userId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      console.warn(result);
      setBName("")
      setPrice("")
      setDesc("")
      setImage("")
    } else {
      toast.error("Please Enter All Fields...")
    }
  };

  return (
    <>
      <div className="prod-container">
        <div className="form-container">
          <h1>Add Product</h1>
          <form className="form" onSubmit={handleAdd}>
            <input
              type="text"
              placeholder="Enter Book Name"
              className="input"
              value={name}
              onChange={(e) => setBName(e.target.value)}
            />
            <br />
            <input
              type="number"
              placeholder="Enter Price"
              className="input"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Description"
              className="input"
              value={description}
              onChange={(e) => setDesc(e.target.value)}
            />
            <br />
            <input
              text="text"
              placeholder="Enter Image Url"
              className="input"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <button className="sub-btn">ADD BOOK</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
