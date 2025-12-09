import React, { useEffect, useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

export default function Posts() {
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    const res = await api.get("/posts");
    setPosts(res.data.slice(0, 5));
  };

const addPost = async () => {
    const title = prompt("Enter post title:");
    const body = prompt("Enter post body:");
    
    if (!title || !body) return;
    
    const newPost = { title, body, userId: 1 };
    const res = await api.post("/posts", newPost);
    setPosts([res.data, ...posts]);
};

  const deletePost = async (id) => {
    await api.delete(`/posts/${id}`);
    setPosts(posts.filter(p => p.id !== id));
  };

  useEffect(() => { getAllPosts(); }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>My Data</h2>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={addPost} style={{ marginRight: "10px", background: "#1f9d55", color: "white", padding: "6px 12px", border: "none", borderRadius: "5px" }}>Add</button>
        <button onClick={getAllPosts} style={{ background: "#6bbf59", color: "white", padding: "6px 12px", border: "none", borderRadius: "5px" }}>Reload</button>
      </div>

      {posts.map(p => (
        <div key={p.id} style={{ border: "1px solid #333", margin: "10px 0", padding: "10px", borderRadius: "6px" }}>
          <h3>{p.title}</h3>
          <p>{p.body}</p>
          <button
            onClick={() => deletePost(p.id)}
            style={{ background: "#ff4444", color: "white", padding: "5px 10px", border: "none", borderRadius: "4px", cursor: "pointer" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
