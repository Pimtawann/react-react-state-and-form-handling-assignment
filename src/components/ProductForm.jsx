import { useState } from "react";


function ProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (f) => {
    const err = {};
    if (!f.name) err.name = "Name is required.";
    if (!f.image) err.image = "Image URL is required.";
    if (f.price === "" || f.price === null) err.price = "Price is required.";
    else if (Number(f.price) < 0) err.price = "Price cannot be less than 0.";
    if (!f.description) err.description = "Description is required.";
    if (!f.email) err.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
      err.email = "Invalid email format.";
    return err;
  };

  const handleSubmit = (events) => {
    events.preventDefault();
    setSubmitted(true);
    const err = validate(formData);
    setErrors(err);
    if (Object.keys(err).length === 0) {
      // ✅ ส่งข้อมูลได้
      alert(JSON.stringify(formData));
    }
  };

  const handleChange = (events) => {
    setFormData({ ...formData, [events.target.name]: events.target.value });
    setErrors(err => ({ ...err, [events.target.name]: undefined }));
  };

  const FieldError = ({ name }) =>
    submitted && errors[name] ? (
      <div style={{ color: "white", background:"hsl(0, 60%, 35%)", display:"inline-block",
                    padding:"10px 20px", borderRadius:8, marginTop:10,marginBottom:10, fontSize:18, fontWeight:600 }}>
        {errors[name]}
      </div>
    ) : null;

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
            value = {formData.name}
            onChange={handleChange}
          />
        </label>
        <FieldError name="name" />
      </div>

      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value = {formData.image}
            onChange={handleChange}
          />
        </label>
        <FieldError name="image" />
      </div>

      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value = {formData.price}
            onChange={handleChange}
          />
        </label>
        <FieldError name="price" />
      </div>

      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value = {formData.description}
            onChange={handleChange}
            rows={4}
            cols={30}
          />
        </label>
        <FieldError name="description" />
      </div>

      <div className="input-container">
        <label>
          User's email
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email here"
            value = {formData.email}
            onChange={handleChange}
          />
        </label>
        <FieldError name="email" />
      </div>
      
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
