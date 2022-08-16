import React, { useEffect, useState } from "react";
import "./AddProduct.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams, useNavigate } from "react-router-dom"

function UpdateBook() {
  const [name, setBName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDesc] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function getBookDetail() {
      const resp = await fetch(`http://localhost:5000/product/${id}`)
      let data = await resp.json()
      setBName(data.name)
      setPrice(data.price)
      setDesc(data.description)
      setImage(data.image)
    }
    getBookDetail()
  }, [])

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (name && price && description && image) {
      let result = await fetch(`http://localhost:5000/product/${id}`, {
        method: "Put",
        body: JSON.stringify({ name, price, description, image }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      result = await result.json()
      navigate("/")
      toast.success("Book Details Updated!!")
    } else {
      toast.error("Please Enter All the Fields")
    }
  };

  return (
    <>
      <div className="prod-container">
        <div className="form-container">
          <h1>Update Book Details.</h1>
          <form className="form" onSubmit={handleUpdate}>
            <input
              type="text"
              placeholder="Update Book Name"
              className="input"
              value={name}
              onChange={(e) => setBName(e.target.value)}
            />
            <br />
            <input
              type="number"
              placeholder="Update Price"
              className="input"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Update Description"
              className="input"
              value={description}
              onChange={(e) => setDesc(e.target.value)}
            />
            <br />
            <input
              text="text"
              placeholder="Update Image Url"
              className="input"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <button className="sub-btn">UPDATE BOOK</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateBook;    
