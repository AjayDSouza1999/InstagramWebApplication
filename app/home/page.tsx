// app/home/page.tsx
import React from "react";

export default function HomeFeed() {
  return (
    <main className="flex bg-black min-h-screen text-white">
      {/* Sidebar */}
      <aside className="w-[250px] border-r border-zinc-800 p-6 hidden md:flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-10">Instagram</h1>
          <nav className="space-y-4">
            <a href="#" className="flex items-center space-x-3 hover:text-gray-300">
              <span>🏠</span><span>Home</span>
            </a>
            <a href="#" className="flex items-center space-x-3 hover:text-gray-300">
              <span>🔍</span><span>Search</span>
            </a>
            <a href="#" className="flex items-center space-x-3 hover:text-gray-300">
              <span>🧭</span><span>Explore</span>
            </a>
            <a href="#" className="flex items-center space-x-3 hover:text-gray-300">
              <span>🎬</span><span>Reels</span>
            </a>
            <a href="#" className="flex items-center space-x-3 hover:text-gray-300">
              <span>💬</span><span>Messages</span>
            </a>
            <a href="#" className="flex items-center space-x-3 hover:text-gray-300">
              <span>❤️</span><span>Notifications</span>
            </a>
            <a href="#" className="flex items-center space-x-3 hover:text-gray-300">
              <span>➕</span><span>Create</span>
            </a>
            <a href="#" className="flex items-center space-x-3 hover:text-gray-300">
              <span>👤</span><span>Profile</span>
            </a>
          </nav>
        </div>

        <div>
          <a href="#" className="flex items-center space-x-3 hover:text-gray-300">
            <span>☰</span><span>More</span>
          </a>
        </div>
      </aside>

      {/* Main Feed */}
      <section className="flex-1 flex justify-center p-8">
        <div className="max-w-[500px] w-full space-y-8">
 

{/* Stories */}
<div className="flex space-x-4 overflow-x-auto scrollbar-hide py-2">

{/* ✅ Your Story bubble */}
<div className="flex flex-col items-center text-xs relative">
  {/* Profile circle */}
  <div className="relative h-16 w-16 rounded-full border border-gray-500">
    <img
      src="/avatars/ajay.jpg"
      alt="Your Story"
      className="h-full w-full rounded-full object-cover"
    />

    {/* ✅ Large white Instagram-style plus icon */}
    <div className="absolute -bottom-2 -right-2 bg-white text-gray-700 rounded-full h-7 w-7 flex items-center justify-center text-lg font-bold border border-gray-300 shadow-sm">
      +
    </div>
  </div>

  {/* Label */}
  <p className="mt-1 text-gray-300 text-sm">Your story</p>
</div>




  {/* Other user stories */}
  {["izzy", "aub", "awk", "ben", "fayez", "nile"].map((user) => (
    <div key={user} className="flex flex-col items-center text-xs">
      <div className="h-16 w-16 rounded-full border-2 border-pink-500 overflow-hidden">
        <img
          src={`/avatars/${user}.jpg`}
          alt={user}
          className="h-full w-full object-cover"
        />
      </div>
      <p className="mt-1 text-gray-300">{user}</p>
    </div>
  ))}

</div>


          {/* Example Post */}
          <article className="border border-zinc-800 rounded-md">
            <header className="flex items-center p-3 space-x-3">
              <div className="h-8 w-8 rounded-full bg-gray-500"></div>
              <p className="font-semibold text-sm">Ajay Dsouza</p>
            </header>
            <img
              src="/posts/example1.jpg"
              alt="Post"
              className="w-full h-auto"
            />
            <div className="p-3 text-sm space-y-1">
              <p><strong>Ajay Dsouza</strong> Just hanging out with the Terminator. He said, ‘I’ll be back.’ I said, ‘Make it quick!’ 😄🤖</p>
              <p className="text-gray-400 text-xs">41m ago</p>
            </div>
          </article>
        </div>

        {/* Right sidebar */}
        <aside className="hidden lg:flex flex-col w-[300px] ml-10 mt-4 space-y-6">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-gray-500"></div>
            <div>
              <p className="font-semibold text-sm">ajayjostal</p>
              <p className="text-gray-400 text-xs">Ajay Dsouza</p>
            </div>
          </div>

          <div>
            <p className="text-gray-400 text-sm mb-2">Suggested for you</p>
            {["Joanna", "Pradyumna", "Mugrody", "Sumith", "Nidhi"].map((name) => (
              <div
                key={name}
                className="flex justify-between items-center text-sm mb-3"
              >
                <p>{name}</p>
                <button className="text-blue-400 font-semibold">Follow</button>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}
