import React, { useState } from "react";
import validator from "validator";
import "./App.css";

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Strong Password");
    } else {
      setErrorMessage("Weak Password");
    }
  };

  return (
    <div className="page">
      <div className="password-card">

        <div className="icon">🔐</div>

        <h1>Password Strength Checker</h1>

        <p className="subtitle">
          Create a strong password to keep your account secure.
        </p>


        <div className="input-group">
          <label>Enter Password</label>

          {/* Password input with eye button */}
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              onChange={(e) => validate(e.target.value)}
            />

            <button
              type="button"
              className="eye-button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
        </div>

        {errorMessage && (
          <div
            className={`message ${
              errorMessage === "Strong Password" ? "strong" : "weak"
            }`}
          >
            {errorMessage === "Strong Password" ? "✓" : "⚠"}{" "}
            {errorMessage}
          </div>
        )}

        <div className="requirements">
          <p>Password should contain:</p>
          <span>✓ At least 8 characters</span>
          <span>✓ Uppercase & lowercase letters</span>
          <span>✓ At least one number</span>
          <span>✓ At least one special symbol</span>
        </div>

      </div>
    </div>
  );
};

export default App;