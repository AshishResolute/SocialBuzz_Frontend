import { LoginForm } from "../components/auth/loginForm.jsx";
import { SignupForm } from "../components/auth/signupForm.jsx";

export const Auth = ({ mode }) => {
  return (
    <div className="bg-[url(../../src/assets/socialBuzzAuth.jpg)] h-screen w-screen bg-cover bg-center bg-no-repeat font-sora p-8 flex flex-col overflow-auto">
      <h1 className="text-3xl font-bold text-slate-400">
        Social<span className="text-3xl font-bold text-yellow-300">Buzz</span>
      </h1>
      <div className="flex items-center justify-center flex-1">
      {mode === "login" ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
};
