'use client';

import App from '@/app/components/Footer';
import Header from '@/app/components/Header';
import { useRef, useState } from 'react';

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const [error, setError] = useState(false);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.some((digit) => digit === '')) {
      setError(true);
    } else {
      setError(false);
      const code = otp.join('');
      alert(`Submitting OTP: ${code}`);
      // TODO: Send OTP to backend
    }
  };

  return (
    <>
    <Header/>
    <div className="h-full flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-md px-6 py-10">
        <h2 className="text-2xl font-bold text-center mb-2 text-black">Verify OTP</h2>
        <p className="text-center text-gray-600 mb-6">
          We’ve sent a 6‑digit verification code to your email/account.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-between gap-2 mb-4">
            {otp.map((digit, idx) => (
  <input
    key={idx}
    type="text"
    inputMode="numeric"
    maxLength={1}
    className="otp w-full py-3 text-center rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 text-lg text-black"
    value={digit}
    onChange={(e) => handleChange(idx, e.target.value)}
    onKeyDown={(e) => handleKeyDown(e, idx)}
    ref={(el) => {
      inputRefs.current[idx] = el;
    }}
  />
))}

          </div>
          {error && (
            <p className="text-red-500 text-sm mb-4">Please enter all 6 digits of the OTP.</p>
          )}
          <button
            type="submit"
            className="w-full bg-[#1d2f49] hover:bg-[#1d2f49] text-white font-semibold py-3 rounded-md"
          >
            VERIFY
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Didn’t receive the code?{' '}
          <a href="#" className="text-blue-600 hover:underline font-medium">
            Resend OTP
          </a>
        </p>
      </div>
    </div>
    <App/>
    </>
  );
}
