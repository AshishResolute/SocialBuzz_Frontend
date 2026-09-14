const LoginForm = ()=>{
    return(
        <form action="">
            <h2 className="text-xl font-bold">Welcome<span className="text-yellow-300">Back</span></h2>
            <p>Login to continue to SocialBuzz</p>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="you@example.com"/>
            <label htmlFor="password">Email</label>
            <input type="password" name="password" id="password" placeholder="Enter your password"/>
            <div>
                <div><input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember Me</label></div>
                <a href="#">Forgot password</a>
            </div>
            <button>Login</button>
            <p>Don't have an Account? <a href="#">Signup</a></p>
        </form>
    )
}