'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

const TodoLists = () => {
  const [todoLists, setTodoLists] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/todoLists`)
      .then((response) => response.json())
      .then((data) => setTodoLists(data))
      .catch((error) => console.error("Error fetching todo lists:", error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Todo Lists</h1>
      <Link legacyBehavior href="/todoLists/create">
        <a className="text-blue-500 mb-4 inline-block">Create Todo List</a>
      </Link>
      <ul>
        {todoLists.map((todoList) => (
          <li key={todoList.id} className="mb-2">
            <Link legacyBehavior href={`/todoLists/${todoList.id}`}>
              <a className="text-blue-600">{todoList.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoLists;
