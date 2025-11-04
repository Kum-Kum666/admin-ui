import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { staticPosts } from "../postsData.js"; 

function Exercise() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadStaticData = () => {
      try {
        setPosts(staticPosts.slice(0,20));
      } catch (error) {
        console.error("[Component] Gagal menampilkan data:", error.message);
      }
    };
    loadStaticData();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-red-700">
          Post Cards
        </h1>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Exercise;