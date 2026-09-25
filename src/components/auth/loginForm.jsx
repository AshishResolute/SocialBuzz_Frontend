import { useState } from "react";

export const LoginForm = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });
  const handleLogin = async(event) => {
    event.preventDefault();
    if (loginForm.email.length === 0) {
      setErrors((prev) => ({
        ...prev,
        email: `email required!`,
      }));
      return;
    }
    else if (errors.email !== null) {
      setErrors((prev) => ({
        ...prev,
        email: `Invalid email provided!`,
      }));
      return;
    }
    else if (loginForm.password.length === 0) {
      setErrors((prev) => ({
        ...prev,
        password: `password required!`,
      }));
      return;
    }
    else if (errors.password !== null) {
      setErrors((prev) => ({
        ...prev,
        password: `Invalid password provided!`,
      }));
      return;
    } else {
      try{
        console.log(`${import.meta.env.VITE_API_URL}/auth/login`)
        const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`,{
          method:"POST",
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(loginForm),
          credentials:"include"
        })
         if(!res.ok){
        throw new Error(`Login failed`)
      }
      }
      catch(error){
        console.error(error.message)
      }
    };
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const error = validateField(name, value);
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
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <form
      action=""
      className="flex flex-col bg-black/40  rounded-2xl p-8 gap-4 text-gray-300 w-md"
      onSubmit={handleLogin}
    >
      <h2 className="text-2xl font-bold text-white">
        Welcome <span className="text-yellow-300">Back</span>
      </h2>
      <p className="text-sm">Login to continue to SocialBuzz</p>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={loginForm.email}
        placeholder="you@example.com"
        onChange={handleChange}
        className="p-2 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
      />
      {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={loginForm.password}
        onChange={handleChange}
        placeholder="Enter your password"
        className="p-2 bg-white/10 border  border-white/10 rounded-xl focus:outline-none focus:ring focus:ring-yellow-400"
      />
      {errors.password && (
        <p className="text-sm text-red-500">{errors.password}</p>
      )}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex justify-center items-center gap-2">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <a href="#" className="text-yellow-500">
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        className="bg-amber-300 p-2 rounded-xl text-gray-900 hover:bg-black hover:text-yellow-300 transition-colors duration-300"
      >
        Login
      </button>
      <p className="text-sm text-center">
        Don't have an Account?{" "}
        <a href="#" className="text-yellow-500">
          Signup
        </a>
      </p>
    </form>
  );
};

const validateField = (name, value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const lowerCaseRegex = /[a-z]/;
  const upperCaseRegex = /[A-Z]/;
  const specialRegex = /[!@#$%^&*()]/;
  if (name === "email") {
    if (!emailRegex.test(value) && value.length !== 0) {
      return "Invalid email";
    } else return null;
  }
  if (name === "password") {
    if ((value.length < 8 || value.length > 28) && value.length !== 0) {
      return "Password must be between 8 and 28 characters";
    }
    if (value.length !== 0 && !lowerCaseRegex.test(value)) {
      return "password must have atleast one lowercase character";
    }
    if (value.length !== 0 && !upperCaseRegex.test(value)) {
      return "Password must have atleast one uppercase character";
    }
    if (value.length !== 0 && !specialRegex.test(value)) {
      return "Password must have atleast one special character";
    }
    return null;
  }
};
