import { useState } from "react";

export const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValid = emailRegex.test(email);
  const passwordValid = password.length >= 8;

  const togglePassword = () => setShowPassword(!showPassword);
  const formValid = emailValid && passwordValid;

  return {
    email, setEmail,
    password, setPassword,
    showPassword, togglePassword,
    emailValid, passwordValid, formValid
  };
};