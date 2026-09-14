export const SignupForm = () => {
  return (
    <form action="">
      <h2 className="text-xl font-bold">
        Create Your<span className="text-yellow-300">Account</span>
      </h2>
      <p>join the community and start sharing</p>
      <label htmlFor="text">Full name</label>
      <input type="text" name="text" id="text" placeholder="Enter your name" />
      <label htmlFor="email">Email address</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="you@example.com"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Create a strong password"
      />
      <label htmlFor="confirm_password">Confirm password</label>
      <input
        type="confirm_password"
        name="confirm_password"
        id="confirm_password"
        placeholder="Confirm password"
      />

      <button>Signup</button>
      <p>
        Already have an Account? <a href="#">Login</a>
      </p>
    </form>
  );
};
