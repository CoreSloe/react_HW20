import React, { useState, useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [subscribe, setSubscribe] = useState(false);

  const handleRegistration = () => {
    localStorage.setItem("userEmail", formData.email);
    localStorage.setItem("userPassword", formData.password);
    localStorage.setItem("userSubscribe", subscribe);
  };

  const validateField = (fieldName, value) => {
    let errorMessage = "";
    switch (fieldName) {
      case "firstName":
        errorMessage =
          value.trim().length >= 3
            ? ""
            : "First Name must be at least 3 characters";
        break;
      case "lastName":
        errorMessage =
          value.trim().length >= 3
            ? ""
            : "Last Name must be at least 3 characters";
        break;
      case "email":
        errorMessage = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Invalid Email";
        break;
      case "password":
        errorMessage = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value)
          ? ""
          : "Password must be at least 8 characters and contain both upper and lower case letters";
        break;
      default:
        break;
    }
    return errorMessage;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    const errorMessage = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const getFieldBorderColor = (fieldName) => {
    if (errors[fieldName]) {
      return "red";
    } else if (formData[fieldName]) {
      return "green";
    }
    return "";
  };

  useEffect(() => {
    const savedSubscribe = localStorage.getItem("userSubscribe");
    setSubscribe(savedSubscribe === "true");
  }, []);

  return (
    <div className="registration-form">
      <div className="profile-icon">
        <AiOutlineUser size={40} /> {/* Використовую іконку AiOutlineUser */}
      </div>
      <h2>Sign up</h2>
      <div className="input-group">
        <div className="input-group-item">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            style={{ borderColor: getFieldBorderColor("firstName") }}
          />
          {errors.firstName && (
            <span className="error-message">{errors.firstName}</span>
          )}
        </div>
        <div className="input-group-item">
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            style={{ borderColor: getFieldBorderColor("lastName") }}
          />
          {errors.lastName && (
            <span className="error-message">{errors.lastName}</span>
          )}
        </div>
      </div>
      <div className="input-group">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          style={{ borderColor: getFieldBorderColor("email") }}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      <div className="input-group">
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          style={{ borderColor: getFieldBorderColor("password") }}
        />
        {errors.password && (
          <span className="error-message">{errors.password}</span>
        )}
      </div>
      <div className="input-group remember-me">
        <input
          type="checkbox"
          checked={subscribe}
          onChange={() => setSubscribe(!subscribe)}
          style={{ marginRight: "5px" }}
        />
        <label>
          I want to receive inspiration, marketing promotions and updates via
          email.
        </label>
      </div>

      <button onClick={handleRegistration}>Sign up</button>
      <div className="sign-in">
        <a href="/" className="sign-in-link">
          Already have an account? Sign in
        </a>
      </div>
      <div className="copyright">Copyright © Your Website 2023</div>
    </div>
  );
};

export default RegistrationForm;
