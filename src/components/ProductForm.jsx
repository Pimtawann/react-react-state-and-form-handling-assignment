import { use, useState } from "react";

function ProductForm() {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")
  const [description,setDescription] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState({}) 

  function validateForm() {
    const newErrors = {};
    if (!name){
      newErrors.name = "Name is required.";
    }
    if (!image){
      newErrors.image = "Image is required.";
    } 
    if (!price){
      newErrors.price = "Price is required.";
    } else if (price < 0){
      newErrors.price = "Price cannot be less than 0."
    }
    if (!description){
      newErrors.description = "Description is required.";
    }
    if (!email){
      newErrors.email = "Email is required";
    } else if(!isValidEmail(email)){
      newErrors.email = "Invalid email format.";
    }
    
    if(Object.keys(newErrors).length > 0){
      setError(newErrors);
      return false;
    }
  
    setError({});
    return true;
  }
    function handlerSubmit(event){
      event.preventDefault();
      if (validateForm() !==0){
        return;
      }

      let newFormData = {
        name: name,
        image: image,
        price: price,
        description: description,
        email: email,
      };

      alert(JSON.stringify(newFormData));

      setName("");
      setImage("");
      setPrice("");
      setDescription("");
      setEmail("");
      setError({});

    }
  


  function isValidEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  return (
    <form className="post-form" onSubmit={handlerSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(event) => {setName(event.target.value)}}
            value={name}
          />
        </label>
        {error.name && <div className="error-message">{error.name}</div>}
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(event) => {setImage(event.target.value)}}
            value={image}
          />
        </label>
        {error.image && <div className="error-message">{error.image}</div>}
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(event) => {setPrice(event.target.value)}}
            value={price}
          />
        </label>
        {error.price && <div className="error-message">{error.price}</div>}
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(event) => {setDescription(event.target.value)}}
            value={description}
            rows={4}
            cols={30}
          />
        </label>
        {error.description && <div className="error-message">{error.description}</div>}
      </div>
      <div className="input-container">
        <label>
          User's email
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email here"
            onChange={(event) => {setEmail(event.target.value)}}
            value={email}
          />
        </label>
        {error.email && <div className="error-message">{error.email}</div>}
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
