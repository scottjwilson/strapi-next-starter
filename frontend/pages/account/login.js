import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import AuthContext from "@/context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserIcon } from "@heroicons/react/solid";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useContext(AuthContext);

  useEffect(() => error && toast.error(error));

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <Layout>
      {" "}
      <div className="form-container">
        <div className="form-group">
          <UserIcon className="h-8 w-8" />
          <h1 className="form-title">Login</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="email" className="text-xs">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
          <label htmlFor="password" className="text-xs">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
          <button className="form-button">Login</button>
        </form>
        <div className="py-4">
          <p className="text-sm font-barlow">
            Don't have an account?{" "}
            <Link href="/account/register">
              <a className="hyper-link">Register</a>
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Layout>
  );
}
