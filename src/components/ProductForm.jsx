import { useState } from "react";

function ProductForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});


  function isValidateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateForm() {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!image.trim()) newErrors.image = "Image is required.";

    if (price === "") {
      newErrors.price = "Price is required.";
    } else if (Number(price) < 0) {
      newErrors.price = "Price cannot be less than 0.";
    }

    if (!description.trim())
      newErrors.description = "Description is required.";

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidateEmail(email)) {
      newErrors.email = "Invalid email format.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateForm() !== 0) return;

    const newformData = {
      name: name.trim(),
      image: image.trim(),
      price: Number(price),
      description: description.trim(),
      email: email.trim(),
    };

    alert(JSON.stringify(newformData, null, 2));


    setName("");
    setImage("");
    setPrice("");
    setDescription("");
    setEmail("");
    setErrors({});
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>

      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(e) => setName(e.target.value)}  
            value={name}
          />
        </label>
        {errors.name && <p className="error-message">{errors.name}</p>}
      </div>

      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        {errors.image && <p className="error-message">{errors.image}</p>}
      </div>

      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </label>
        {errors.price && <p className="error-message">{errors.price}</p>}
      </div>

      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Enter description here"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            rows={4}
            cols={30}
          />
        </label>
        {errors.description && (
          <p className="error-message">{errors.description}</p>
        )}
      </div>

      <div className="input-container">
        <label>
          User's email
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email here"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>

      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;