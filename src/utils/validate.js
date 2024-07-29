import React from 'react'

const checkValidateData = (email,password) => {
  const isEmailvalid= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);
  if(!isEmailvalid) return "Email is not a valid email address";
  if(!isPasswordValid) return "Password must contain at least 8 characters, including uppercase letters, lowercase letters, numbers, and special characters";
    return null;
}

export default checkValidateData;