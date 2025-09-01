import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

const VideoTitle = ({ title, overview }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black group">
      {/* Title */}
      <h1 className="text-2xl md:text-6xl font-bold mb-2">{title}</h1>

      {/* Overview */}
      <p
        className={`
          py-6 text-lg w-1/4 transition-all duration-500 ease-in-out
          ${expanded ? "line-clamp-none" : "hidden md:group-hover:line-clamp-2 md:group-hover:block"}
        `}
      >
        {overview}
      </p>

      {/* Buttons */}
      <div className="my-4 md:m-0 flex gap-4">
        <button className="bg-white flex gap-2 items-center text-black py-1 md:py-4 px-3 md:px-12 text-xl rounded-lg hover:bg-opacity-80">
          <FaPlay /> Play
        </button>
        <button
          onClick={() => setExpanded(!expanded)}
          className="hidden md:flex items-center gap-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-70"
        >
          <FaCircleInfo className="text-red-500" />
          {expanded ? "Hide Info" : "More Info"}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
