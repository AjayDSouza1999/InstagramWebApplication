// app/home/page.tsx
"use client";
import React, { useState } from "react";
import StoriesBar from "./stories/page";
import Link from "next/link";

export default function HomeFeed() {
  const [openStories, setOpenStories] = useState(false);

  return (
    <main className="flex bg-black min-h-screen text-white">
      {/* Sidebar */}
      <aside className="w-[200px] border-r border-zinc-700 p-6 hidden md:flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-10">Instagram</h1>
          <nav className="space-y-4">
            {[
              ["🏠", "Home"],
              ["🔍", "Search"],
              ["🧭", "Explore"],
              ["🎬", "Reels"],
              ["💬", "Messages"],
              ["❤️", "Notifications"],
              ["➕", "Create"],
              ["👤", "Profile"],
            ].map(([icon, label]) => (
              <a
                key={label}
                href="#"
                className="flex items-center space-x-3 hover:text-gray-300"
              >
                <span>{icon}</span>
                <span>{label}</span>
              </a>
            ))}
          </nav>
        </div>

        <div>
          <a
            href="#"
            className="flex items-center space-x-3 hover:text-gray-300"
          >
            <span>☰</span>
            <span>More</span>
          </a>
        </div>
      </aside>

      {/* Main Feed */}
      <section className="flex-1 flex justify-center p-8">
        <div className="max-w-[500px] w-full space-y-8">
          {/* ✅ Stories Section */}
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide py-2">
            {/* ✅ Your Story bubble */}


<Link
  href="/home/stories"
  className="flex flex-col items-center text-xs relative"
>
  <div className="relative h-16 w-16 rounded-full border border-gray-500">
    <img
      src="/avatars/ajay.jpg"
      alt="Your Story"
      className="h-full w-full rounded-full object-cover"
    />
    <div className="absolute -bottom-2 -right-2 bg-white text-gray-700 rounded-full h-7 w-7 flex items-center justify-center text-lg font-bold border border-gray-300 shadow-sm">
      +
    </div>
  </div>
  <p className="mt-1 text-gray-300 text-sm">Your story</p>
</Link>




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
              <img
                src="/avatars/ajay2.jpg"
                alt="Ajay Dsouza"
                className="h-8 w-8 rounded-full object-cover"
              />
              <p className="font-semibold text-sm">Ajay Dsouza</p>
            </header>

            <img
              src="/posts/example1.jpg"
              alt="Post"
              className="w-full h-auto"
            />

            <div className="p-3 text-sm space-y-1">
              <p>
                <strong>Ajay Dsouza</strong> Just hanging out with the
                Terminator. He said, ‘I’ll be back.’ I said, ‘Make it quick!’ 😄🤖
              </p>
              <p className="text-gray-400 text-xs">41m ago</p>
            </div>
          </article>
        </div>

        {/* ✅ Right Sidebar */}
  <aside className="hidden lg:flex flex-col w-[250px] ml-8 mt-4 space-y-6 text-sm">
  {/* Profile Section */}
  <div className="flex items-center justify-between w-full">
    <div className="flex items-center space-x-3">
      <img
        src="/avatars/ajay1.jpg"
        alt="Ajay Dsouza"
        className="h-12 w-12 rounded-full object-cover"
      />
      <div>
        <p className="font-semibold text-sm">ajayjostal</p>
        <p className="text-gray-400 text-xs">Ajay Dsouza</p>
      </div>
    </div>
    <button className="text-blue-400 text-xs font-semibold">Switch</button>
  </div>

  {/* Suggested Users Section */}
  <div className="w-full">
    <div className="flex justify-between items-center mb-3">
      <p className="text-gray-400 text-sm">Suggested for you</p>
      <button className="text-white text-xs font-semibold hover:text-gray-300">
        See All
      </button>
    </div>

    <div className="space-y-3">
      {["Joanna", "Pradyumna", "Mugrody", "Sumith", "Nidhi"].map((name) => (
        <div key={name} className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src={`/avatars/${name.toLowerCase()}.jpg`}
              alt={name}
              className="h-8 w-8 rounded-full object-cover"
            />
            <p className="text-sm">{name}</p>
          </div>
          <button className="text-blue-400 text-xs font-semibold">
            Follow
          </button>
        </div>
      ))}
    </div>
  </div>
</aside>

      </section>
    </main>
  );
}
