import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear errors when user starts typing in a field
    setErrors({
      ...errors,
      [name]: "",
    });

    // Validation
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors({
        ...errors,
        email: emailRegex.test(value) ? "" : "Enter a valid email address",
      });
    }

    if (name === "password") {
      setErrors({
        ...errors,
        password:
          value.length >= 6
            ? ""
            : "Password should be at least 6 characters long",
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Display a notification if the field is required and empty
    if (value.trim() === "" && name !== "password") {
      setErrors({
        ...errors,
        [name]: "This field is required",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for errors before submitting
    if (errors.name || errors.email || errors.message) {
      console.log("Form has errors. Please fix them.");
      return;
    }

    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <main className="container mt-5 mb-5">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.name && <p className="text-danger">{errors.name}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Your Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Your Message:
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows="4"
            required
          />
          {errors.message && <p className="text-danger">{errors.message}</p>}
        </div>

        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </main>
  );
};

export default Contact;

// needs to contain contact form w/ name, email, + message. Has to verify that its a valid email and that all of the form is required.
