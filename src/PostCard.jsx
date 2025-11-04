import React, { useState } from "react";

function PostCard(props) {
  const { title, body } = props;

  const [clicked, setClicked] = useState(false);

  return (
    <div
      className="flex flex-col justify-between h-full  bg-white p-6 rounded-lg shadow transition-all duration-200 
    hover:shadow-md hover:scale-[1.02] hover:border-red-400 hover:bg-pink-50"
    >
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2 capitalize">
          {title}
        </h2>
        <p className="text-gray-600 text-sm">{body}</p>
      </div>

      <button
        className={`${
          clicked ? "bg-special-red2" : "bg-gray-01"} text-white p-2 rounded-md w-full mt-4 transition-all hover:brightness-110`}
        onClick={() => setClicked(true)}
      >
        {clicked ? "Tombol sudah diklik" : "Silahkan Klik"}
      </button>
    </div>
  );
}

export default PostCard;