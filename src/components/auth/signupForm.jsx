import { useState } from "react";

export const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({
    username: null,
    email: null,
    password: null,
    confirm_password: null,
  });
  const handleSignup = (event) => {
    event.preventDefault();
    console.log("The res sent is:", formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const error = validateField(name, value);
    console.log("name:", name);
console.log("value:", value);
console.log("error:", error);
    if (error) {
      setErrors((prev)=>({
        ...prev,
        [name]:error
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
        {errors.username&& <p className="text-red-500 text-sm">{errors.username}</p>}
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
        <label htmlFor="confirm_password">Confirm password</label>
        <input
          type="password"
          name="confirm_password"
          value={formData.confirm_password}
          onChange={handleChange}
          id="confirm_password"
          placeholder="Confirm password"
          className="p-1.5 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
        />
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

const validateField = (name, value) => {
  if (name === "username") {
    if ((value.length < 3 || value.length > 15 )&&value.length!==0)
      return "username must be between 3 and 15 characters";
  } else return null;
};
