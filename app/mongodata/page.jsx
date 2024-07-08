"use client"
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", model: "", img: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (result.success) {
        alert("Data inserted successfully!");
      } else {
        alert("Failed to insert data!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mt-20 item-center bg-white">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Model</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div>
          <label>Image URL</label>
          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={handleChange}
            required
          />
        </div> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
