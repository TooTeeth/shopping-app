import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/userSlice";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) return;

    dispatch(login({ email, name: "John Doe" }));

    const from = location.state?.from || "/";

    navigate(from);
  };

  return (
    <div className="container">
      <h1 className="page-title text-center py-10">Login</h1>
      <form className="max-w-md mx-auto" onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="label-style">
            Email
          </label>
          <input className="input-style" type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="lable-style" htmlFor="password">
            Password
          </label>
          <input className="input-style" type="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button className="button-style cursor-grab hover:underline" type="submit">
            Login
          </button>
          <button className="button-style cursor-grab hover:underline" type="submit">
            Sign up
          </button>
        </div>
        <div>
          <label className="label-style text-center border rounded-2xl my-8 cursor-grab hover:underline">Googgle로 로그인하기</label>
        </div>
        <div>
          <label className="label-style text-center border rounded-2xl my-8 cursor-grab hover:underline">facebook으로 로그인하기</label>
        </div>
        <label className=" label-style text-center border rounded-2xl my-8 cursor-grab hover:underline"> &#x1F601; kakao로 로그인하기</label>
        <div>
          <label className="label-style text-center border rounded-2xl my-8 cursor-grab hover:underline">&copy;Naver로 로그인하기</label>
        </div>
      </form>
    </div>
  );
}

export default Login;
