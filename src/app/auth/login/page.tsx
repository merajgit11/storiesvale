'use client';

import App from '@/app/components/Footer';
import Header from '@/app/components/Header';
import { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: false, password: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      username: !username.trim(),
      password: !password.trim(),
    };
    setErrors(newErrors);

    if (!newErrors.username && !newErrors.password) {
      // Perform login logic here
      alert('Logging in...');
    }
  };

  return (
    <>
    <Header/>
    <div className=" flex justify-center items-center py-8 px-4">
      <div className="w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-center mb-1 text-black">Welcome back to StoriesVale</h2>
        <p className="text-center text-md text-gray-600 mb-6">
          Dive back into your world of stories. Read, write, and explore creativity like never before.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <input
              type="text"
              id="username"
              placeholder="Username or email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">Please enter your username or email.</p>
            )}
          </div>

          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">Please enter your password.</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md"
          >
            LOG IN
          </button>

          <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              Keep me logged in
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot your password?
            </a>
          </div>
        </form>

        <div className="flex items-center gap-2 mb-6 mt-6">
          <hr className="flex-grow border-gray-300" />
          <span className="text-sm text-gray-500 relative" style={{ top: '-2px' }}>
            or
          </span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button className="w-full flex items-center justify-center border border-gray-300 text-gray-700 py-3 rounded-md mb-3 hover:bg-gray-100">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5 mr-2"
            alt="Google"
          />
          Sign in with Google
        </button>

        <button className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-md mb-6 hover:bg-blue-700">
          <svg className="w-5 h-5 mr-2 fill-white" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35C.594 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.785 4.659-4.785 1.325 0 2.464.098 2.796.142v3.24h-1.918c-1.504 0-1.795.716-1.795 1.763v2.31h3.587l-.467 3.623h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z" />
          </svg>
          LOG IN WITH FACEBOOK
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{' '}
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
    <App/>
    </>
  );
}
