import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import AuthContext from "@/context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserIcon } from "@heroicons/react/solid";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { register, error } = useContext(AuthContext);

  useEffect(() => error && toast.error);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      toast.error("Passwords do not match!");
      return;
    }

    register({ username, email, password });
  };

  return (
    <Layout>
      {" "}
      <div className="form-container">
        <div className="form-group">
          <UserIcon className="h-8 w-8" />
          <h1 className="form-title">Register</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="username" className="text-xs">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
          />

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

          <label htmlFor="password" className="text-xs">
            Confirm Password
          </label>
          <input
            type="password"
            id="passwordConfirm"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            className="form-input"
          />

          <button className="form-button">Register</button>
        </form>

        <div className="py-4">
          <p className="text-sm font-barlow">
            Already have an account?{" "}
            <Link href="/account/login">
              <a className="hyper-link">Login</a>
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
