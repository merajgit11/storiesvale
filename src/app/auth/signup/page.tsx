'use client';

import App from '@/app/components/Footer';
import Header from '@/app/components/Header';
import { useState } from 'react';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    username: false,
    email: false,
    password: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: !formData.name.trim(),
      username: !formData.username.trim(),
      email: !formData.email.trim(),
      password: !formData.password.trim(),
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      alert('Signing up...');
      // Perform sign-up logic here
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center py-8 px-4">
        <div className="w-full max-w-md p-6">
          <h2 className="text-2xl font-bold text-center mb-1 text-black">Create your StoriesVale account</h2>
          <p className="text-center text-md text-gray-600 mb-6">
            Join the world of storytelling and start your creative journey.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">

             <div>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">Please enter a valid email address.</p>}
            </div>

            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">Please enter your full name.</p>}
            </div>

            

           

            

            <button
              type="submit"
              className="w-full bg-[#1d2f49] hover:bg-[#1d2f49] text-white font-semibold py-3 rounded-md"
            >
              SIGN UP
            </button>
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
            Sign up with Google
          </button>

          <button className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-md mb-6 hover:bg-blue-700">
            <svg className="w-5 h-5 mr-2 fill-white" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.594 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.785 4.659-4.785 1.325 0 2.464.098 2.796.142v3.24h-1.918c-1.504 0-1.795.716-1.795 1.763v2.31h3.587l-.467 3.623h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z" />
            </svg>
            SIGN UP WITH FACEBOOK
          </button>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{' '}
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
      <App />
    </>
  );
}
