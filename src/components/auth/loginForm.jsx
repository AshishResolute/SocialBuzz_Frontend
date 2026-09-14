export const LoginForm = () => {
  return (
    <form action="" className="flex flex-col bg-black/40  rounded-2xl p-8 gap-4 text-gray-300">
      <h2 className="text-2xl font-bold text-white">
        Welcome <span className="text-yellow-300">Back</span>
      </h2>
      <p className="text-sm">Login to continue to SocialBuzz</p>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="you@example.com"
        className="p-2"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter your password"
        className="p-2"
      />
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex justify-center items-center gap-2">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <a href="#" className="text-yellow-300">Forgot password?</a>
      </div>
      <button className="bg-amber-300 p-2 rounded-xl text-gray-900 hover:bg-black hover:text-yellow-300 transition-colors duration-300">Login</button>
      <p className="text-sm text-center">
        Don't have an Account? <a href="#" className="text-yellow-300">Signup</a>
      </p>
    </form>
  );
};
