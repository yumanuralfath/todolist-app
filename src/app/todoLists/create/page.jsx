"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateTodoList = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/todoLists`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      }
    );

    if (res.ok) {
      router.push("/todoLists");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create Todo List</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateTodoList;
