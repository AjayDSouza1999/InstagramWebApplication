"use client";
import Image from "next/image";
import { useState } from "react"; 
import { useRouter } from "next/navigation";

// app/page.tsx
export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

 // Handle form submit
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple credential check
    if (username === "ajayjostal@gmail.com" && password === "1234") {
      // ✅ Redirect to Instagram login page
      router.push("/home");
    } else {
      setError("Incorrect username or password.");
    }
  };



  return (
    <main className="flex items-center justify-center min-h-screen bg-black text-white">
      {/* Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-16">
        
        {/* LEFT: Image section */}
        <div className="hidden md:block">
          <img
            src="/insta-phone.png"
            alt="Instagram phone preview"
            className="h-[580px] w-auto"
          />
        </div>

        {/* RIGHT: Login section */}
        <div className="flex flex-col items-center">
          <div className="border border-zinc-700 bg-zinc-900 px-10 py-8 rounded-md w-[350px]">
            <h1 className="text-4xl font-semibold text-center mb-8 font-sans">Instagram</h1>
            
          <form onSubmit={handleLogin} className="flex flex-col space-y-3">
          <input
            type="text"
            placeholder="Phone number, username, or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 bg-zinc-800 border border-zinc-700 rounded text-sm focus:outline-none"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 pr-16 bg-zinc-800 border border-zinc-700 rounded text-sm focus:outline-none w-full"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-2 px-2 text-sm font-semibold text-gray-300 hover:text-white"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {error && (
            <p className="text-red-400 text-xs text-center">{error}</p>
          )}

          <button
            type="submit"
            className="bg-blue-500 py-2 rounded text-sm font-semibold hover:bg-blue-600 transition"
          >
            Log In
          </button>
        </form>

            <div className="flex items-center justify-center space-x-3 my-4 text-gray-400 text-sm">
              <span className="border-t border-gray-700 w-20"></span>
              <span>OR</span>
              <span className="border-t border-gray-700 w-20"></span>
            </div>

            <button className="text-blue-400 font-medium text-sm">
              Log in with Facebook
            </button>

            <p className="text-gray-400 text-xs mt-4 text-center cursor-pointer">
              Forgotten your password?
            </p>
          </div>

          {/* Sign-up box */}
          <div className="border border-zinc-700 bg-zinc-900 py-4 mt-4 w-[350px] text-center rounded-md text-sm">
            <span className="text-gray-400">Don't have an account? </span>
            <a href="#" className="text-blue-400 font-medium">Sign up</a>
          </div>

          {/* App download section */}
          <div className="mt-5 text-center">
            <p className="text-sm mb-3">Get the app.</p>
            <div className="flex space-x-3 justify-center">
              <img src="/appstore.svg" alt="App Store" className="h-10" />
              <img src="/playstore.svg" alt="Play Store" className="h-10" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}



