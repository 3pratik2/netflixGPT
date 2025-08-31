import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import {FaCircleInfo} from "react-icons/fa6"

const VideoTitle = ({ title, overview }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="absolute inset-0 px-6 md:px-16 lg:px-24 text-white bg-gradient-to-r from-black/80 to-tranparent">
      <div className="flex group flex-col absolute px-6 md:px-16 lg:px-24 bottom-0 left-0">
      
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          {title}
        </h1> 
        <p
          className={`
                hidden hover:block text-gray-200 w-full md:w-1/2 mb-6 transition-all duration-500 ease-in-out cursor-pointer
                ${
                  expanded
                    ? "opacity-100 line-clamp-none"
                    : "hidden opacity-0 group-hover:opacity-100 group-hover:line-clamp-2"
                }
              `}
        >
          {overview}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mb-12">
          <button className="bg-white text-black px-5 py-2 rounded-md text-sm md:text-lg font-semibold flex items-center gap-2 cursor-pointer hover:bg-white/30 transition">
            {<FaPlay />} Play
          </button>
          <button
            onClick={() => setExpanded(!expanded)}
            className="bg-white/30 text-white px-5 py-2 rounded-md text-sm md:text-lg font-semibold flex items-center gap-2 hover:bg-white/20 cursor-pointer transition"
          >
            {<FaCircleInfo className="text-red-600" />} {expanded ? "Hide Info" : "More Info"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
