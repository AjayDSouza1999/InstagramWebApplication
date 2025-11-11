"use client";
import React, { useEffect, useState, useRef } from "react";

export default function StoriesBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // ✅ Story images (must be in /public/stories/)
  const stories = [
    "/stories/story1.jpg",
    "/stories/story2.jpg",
    "/stories/story3.jpg",
  ];

  // ✅ Auto-progress animation (fills progress bar gradually)
  useEffect(() => {
    setProgress(0);
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + 2; // Adjust speed (2% every 100ms → 5 seconds)
      });
    }, 100);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex]);

  // ✅ Move to next story
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === stories.length - 1 ? 0 : prev + 1
    );
  };

  // ✅ Move to previous story
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? 0 : prev - 1
    );
  };

  // ✅ Stop auto-play when clicking
  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <div
      className="relative flex items-center justify-center h-screen w-full bg-black text-white overflow-hidden"
      onClick={stopAutoPlay}
    >
      {/* ✅ Current Story Image */}
      <img
        src={stories[currentIndex]}
        alt={`Story ${currentIndex + 1}`}
        className="max-h-screen max-w-full object-contain bg-black transition-all duration-500 ease-in-out"
      />

      {/* ✅ Top Overlay */}
      <div className="absolute top-0 left-0 right-0 p-3 sm:p-4">
        {/* Progress bars */}
        <div className="flex space-x-1 mb-4">
          {stories.map((_, idx) => (
            <div
              key={idx}
              className="relative flex-1 h-1 bg-gray-700 rounded-full overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 h-full ${
                  idx < currentIndex ? "bg-white w-full" : "bg-white"
                }`}
                style={{
                  width:
                    idx === currentIndex ? `${progress}%` : idx < currentIndex ? "100%" : "0%",
                  transition: "width 0.1s linear",
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="flex items-center justify-between bg-black bg-opacity-40 rounded-md px-3 py-2">
          <div className="flex items-center space-x-3">
            <img
              src="/avatars/ajay1.jpg"
              alt="Ajay Dsouza"
              className="h-8 w-8 rounded-full object-cover border border-gray-300"
            />
            <p className="font-semibold text-sm">ajayjostal</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-lg font-bold">⋯</button>
            <button
              onClick={() => (window.location.href = "/home")}
              className="text-xl font-semibold"
            >
              ✕
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Tap Areas for Navigation */}
      <div
        className="absolute left-0 top-0 h-full w-1/2 cursor-pointer"
        onClick={handlePrev}
      ></div>
      <div
        className="absolute right-0 top-0 h-full w-1/2 cursor-pointer"
        onClick={handleNext}
      ></div>
    </div>
  );
}
