import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";

const Register = () => {
  const user = useSelector((state) => state.auth.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match.");
        return;
      }
      setIsRegistering(true);
      try {
        await doCreateUserWithEmailAndPassword(email, password, name);
        setIsRegistering(false);
      } catch (error) {
        setErrorMessage(error.message);
        setIsRegistering(false);
      }
    }
  };

  return (
    <main className="w-full h-screen flex justify-center items-center bg-gray-50 pt-6">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg space-y-6">
        {user && <Navigate to={"/"} replace={true} />}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-gray-800">
            Create an Account
          </h3>
        </div>
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label className="text-sm font-semibold text-gray-700 block">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isRegistering}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-200"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 block">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isRegistering}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-200"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 block">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isRegistering}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-200"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 block">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={isRegistering}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-200"
            />
          </div>

          {errorMessage && (
            <span className="text-red-600 font-semibold">{errorMessage}</span>
          )}

          <button
            type="submit"
            disabled={isRegistering}
            className={`w-full py-3 text-white font-medium rounded-lg ${
              isRegistering
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 transition duration-300 shadow-md"
            }`}
          >
            {isRegistering ? "Signing Up..." : "Sign Up"}
          </button>

          <div className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-indigo-600 hover:underline font-semibold"
            >
              Continue
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
