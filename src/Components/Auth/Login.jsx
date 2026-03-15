import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        setLoading(false);
        return;
      }

      // Save token and user info to localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect based on role
      if (data.user.role === "SUPER_ADMIN") {
        navigate("/super-admin/dashboard");
      } else if (data.user.role === "ADMIN") {
        navigate("/admin/dashboard");
      } else {
        navigate("/"); // regular user
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Image Section */}
      <div
        className="hidden lg:flex w-full lg:w-1/2 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1547471080-7cc2caa01a7e')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 p-8 lg:p-10 text-white flex flex-col justify-between h-full">
          <div className="text-lg font-semibold">Trust South Sudan</div>
          <div>
            <p className="text-lg lg:text-xl font-medium italic">
              “Building a stronger community through trust, transparency, and
              collaboration for a brighter future.”
            </p>
            <p className="mt-4 text-sm lg:text-base">Start your journey today</p>
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="mb-6">
            <Link to="/" className="text-sm text-gray-500 hover:underline">
              ← Back to website
            </Link>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Welcome back
          </h2>
          <p className="text-gray-500 mb-6 text-sm sm:text-base">
            Enter your credentials to access your account
          </p>

          {/* Error Message */}
          {error && <div className="text-red-500 mb-4 text-sm">{error}</div>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email address</label>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm">
              <label className="flex items-center gap-2 mb-2 sm:mb-0">
                <input type="checkbox" />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition text-sm sm:text-base"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
