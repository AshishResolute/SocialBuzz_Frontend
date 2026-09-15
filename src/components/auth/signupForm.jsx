export const SignupForm = () => {
  return (
    <form
      action=""
      className="flex flex-col gap-4 text-slate-400 bg-black/50  rounded-2xl p-10"
      onSubmit={handleSignup}
    >
      <h2 className="text-2xl font-bold text-white">
        Create Your <span className="text-yellow-300">Account</span>
      </h2>
      <p className="text-sm">join the community and start sharing</p>
      <div className="flex flex-col space-y-1.5">
          <label htmlFor="text">Full name</label>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Enter your name"
            className="p-1.5  bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
          />
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="you@example.com"
          className="p-1.5 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Create a strong password"
          className="p-1.5 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
        />
        <label htmlFor="confirm_password">Confirm password</label>
        <input
          type="confirm_password"
          name="confirm_password"
          id="confirm_password"
          placeholder="Confirm password"
          className="p-1.5 bg-white/10 border border-white/10 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
        />
      </div>
      <button type="submit" className="bg-amber-300 p-2 rounded-xl text-gray-900 hover:bg-black hover:text-yellow-300 transition-colors duration-300">
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


const handleSignup = (event)=>{
  event.preventDefault()
}