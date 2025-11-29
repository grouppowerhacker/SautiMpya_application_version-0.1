import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Shield, Heart, Lock, ArrowRight, Loader2 } from 'lucide-react';

export function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showEmailSent, setShowEmailSent] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: username,
            },
          },
        });
        if (error) throw error;

        // Check if email confirmation is required
        if (data.user && data.session) {
          // User is automatically logged in (email confirmation disabled)
          navigate('/');
        } else if (data.user && !data.session) {
          // Email confirmation required
          setShowEmailSent(true);
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        navigate('/');
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  if (showEmailSent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1E6A8C] to-[#2B9EB3] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="text-green-600" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Check Your Email</h2>
          <p className="text-gray-600 mb-8">
            We've sent a confirmation link to <strong>{email}</strong>. Please click the link to verify your account and log in.
          </p>
          <button
            onClick={() => {
              setShowEmailSent(false);
              setIsSignUp(false);
            }}
            className="w-full bg-[#1E6A8C] hover:bg-[#155270] text-white font-bold py-3 rounded-lg transition-all"
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E6A8C] to-[#2B9EB3] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl flex overflow-hidden">

        {/* Left Side - Branding */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 p-12 flex-col justify-between relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF6B35] to-[#FFD700]"></div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#1E6A8C] rounded-full flex items-center justify-center">
                <Shield className="text-white" size={24} />
              </div>
              <h1 className="text-3xl font-bold text-[#1E6A8C]">Sauti Mpya</h1>
            </div>

            <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
              A Safe Space for <span className="text-[#2B9EB3]">Your Voice</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Confidential support, AI-powered guidance, and safety resources tailored for you.
              You are not alone.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-700">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Lock size={20} className="text-[#1E6A8C]" />
              </div>
              <div>
                <p className="font-bold">100% Private</p>
                <p className="text-sm text-gray-500">Secure & Confidential</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <Heart size={20} className="text-pink-600" />
              </div>
              <div>
                <p className="font-bold">Empathetic Support</p>
                <p className="text-sm text-gray-500">Always here to listen</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
          <div className="text-center mb-8 md:hidden">
            <Shield className="text-[#1E6A8C] mx-auto mb-4" size={48} />
            <h1 className="text-3xl font-bold text-[#1E6A8C]">Sauti Mpya</h1>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {isSignUp ? 'Create an Account' : 'Welcome Back'}
          </h2>
          <p className="text-gray-500 mb-8">
            {isSignUp ? 'Join our supportive community today' : 'Please enter your details to sign in'}
          </p>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 text-sm border border-red-100">
              {error}
            </div>
          )}

          <form onSubmit={handleAuth} className="space-y-6">
            {isSignUp && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Username</label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2B9EB3] focus:border-transparent outline-none transition-all"
                  placeholder="How should we call you?"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2B9EB3] focus:border-transparent outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2B9EB3] focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1E6A8C] hover:bg-[#155270] text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  {isSignUp ? 'Sign Up' : 'Sign In'}
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-[#2B9EB3] font-bold hover:underline"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
