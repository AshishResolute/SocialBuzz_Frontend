import { useState } from "react";

export const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    username: null,
    email: null,
    password: null,
    confirmPassword: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const error = validateField(
      name,
      value,
      formData.password,
      formData.confirmPassword,
    );
    if (error) {
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSignup = (event) => {
    event.preventDefault();
    if (formData.username.length === 0) {
      setErrors((prev) => ({
        ...prev,
        username: `username is required`,
      }));
      return;
    } else if (errors.username !== null) {
      setErrors((prev) => ({
        ...prev,
        username: `Invalid username`,
      }));
      return;
    } else if (formData.email.length === 0) {
      setErrors((prev) => ({
        ...prev,
        email: `email is required!`,
      }));
      return;
    } else if (errors.email !== null) {
      setErrors((prev) => ({
        ...prev,
        email: `Invalid Email`,
      }));
      return;
    } else if (formData.password.length === 0) {
      setErrors((prev) => ({
        ...prev,
        password: `Password required!`,
      }));
      return;
    } else if (errors.password !== null) {
      setErrors((prev) => ({
        ...prev,
        password: `Invalid password provided!`,
      }));
      return;
    } else if (formData.password.length === 0) {
      setErrors((prev) => ({
        ...prev,
        password: `Password required!`,
      }));
      return;
    } else if (errors.password !== null) {
      setErrors((prev) => ({
        ...prev,
        password: `Invalid password provided!`,
      }));
      return;
    } else console.log(`res submitted`, formData);
  };
  return (
    <form
      action=""
      className="flex flex-col gap-4 text-slate-400 bg-black/50  rounded-2xl p-10 w-md"
      onSubmit={handleSignup}
    >
      <h2 className="text-2xl font-bold text-white">
        Create Your <span className="text-yellow-300">Account</span>
      </h2>
      <p className="text-sm">join the community and start sharing</p>
      <div className="flex flex-col space-y-1.5">
        <label htmlFor="username">Full name</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          id="username"
          placeholder="Enter your name"
          className="p-1.5  bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
        />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username}</p>
        )}
        {/* {formData.username.length===0&& <p className="text-red-500 text-sm">username is required</p>} */}
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          id="email"
          placeholder="you@example.com"
          className="p-1.5 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          id="password"
          placeholder="Create a strong password"
          className="p-1.5 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
        <label htmlFor="confirm_password">Confirm password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          id="confirm_password"
          placeholder="Confirm password"
          className="p-1.5 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-amber-300 p-2 rounded-xl text-gray-900 hover:bg-black hover:text-yellow-300 transition-colors duration-300"
      >
        Signup
      </button>
      <p className="text-sm text-center">
        Already have an Account?{" "}
        <a href="#" className="text-yellow-500">
          Login
        </a>
      </p>
    </form>
  );
};

const validateField = (name, value, password, confirmPassword) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const lowerCaseRegex = /[a-z]/;
  const upperCaseRegex = /[A-Z]/;
  const specialRegex = /[!@#$%^&*()]/;
  if (name === "username") {
    if ((value.length < 3 || value.length > 15) && value.length !== 0)
      return "username must be between 3 and 15 characters";
    else return null;
  }
  if (name === "email") {
    if (value.length !== 0 && !emailRegex.test(value)) return "Invalid email!";
    else return null;
  }
  if (name === "password") {
    if ((value.length < 8 || value.length > 28) && value.length !== 0) {
      return "Password must be between 8 and 28 characters";
    }
    if (!lowerCaseRegex.test(value) && value.length !== 0) {
      return "password must have atleast 1 lower case character";
    }
    if (!upperCaseRegex.test(value) && value.length !== 0) {
      return "password must have atleast 1 upper case character";
    }
    if (!specialRegex.test(value) && value.length !== 0) {
      return "password must have atleast 1 special character";
    } else if (value !== confirmPassword) {
      return "Passwords don\'t match!";
    }
    return null;
  }
  if (name === "confirmPassword") {
    if (value.length !== 0 && value !== password) {
      return "passwords don't match";
    } else return null;
  }
};
