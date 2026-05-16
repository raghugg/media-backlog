"use client";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [mediaId, setMediaId] = useState("");
  const [mediaList, setMediaList] = useState([]);

  return (
    <div className="flex flex-col gap-4 p-8">
      <button onClick={async () => {
        const response = await fetch("http://localhost:8080/media");
        const data = await response.json();
        setMediaList(data);
      }}>Get Media</button>

      {mediaList.map((item: any) => (
        <div key={item.id}>{item.id} - {item.title} - {item.type}</div>
      ))}

      <label>Title: <input value={title} onChange={(e) => setTitle(e.target.value)} /></label>
      <label>Media Type:
        <select value={mediaType} onChange={(e) => setMediaType(e.target.value)}>
          <option value="">Select Media Type</option>
          <option value="MOVIE">Movie</option>
          <option value="TV_SHOW">TV Show</option>
          <option value="BOOK">Book</option>
          <option value="VIDEO_GAME">Video Game</option>
          <option value="PODCAST">Podcast</option>
          <option value="SONG">Song</option>
          <option value="ALBUM">Album</option>
          <option value="VIDEO">Video</option>
          <option value="OTHER">Other</option>
        </select>
      </label>
      <button onClick={async () => {
        await fetch("http://localhost:8080/media", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, type: mediaType })
        });
      }}>Add Media</button>

      <label>ID: <input value={mediaId} onChange={(e) => setMediaId(e.target.value)} /></label>
      <button onClick={async () => {
        await fetch(`http://localhost:8080/media/${mediaId}`, { method: "DELETE" });
      }}>Delete Media</button>
    </div>
  );
}