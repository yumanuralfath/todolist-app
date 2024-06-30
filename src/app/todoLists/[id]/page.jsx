"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const TodoListDetail = () => {
  const [todoList, setTodoList] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/todoLists/${id}`)
        .then((response) => response.json())
        .then((data) => setTodoList(data))
        .catch((error) => console.error("Error fetching todo list:", error));
    }
  }, [id]);

  if (!todoList) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{todoList.title}</h1>
      <p>{todoList.description}</p>
      <div>
        <h2 className="text-xl font-bold mt-4 mb-2">Tasks</h2>
        <ul>
          {todoList.tasks.map((task) => (
            <li key={task.id} className="mb-2">
              {task.title} - {task.completed ? "Completed" : "Incomplete"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoListDetail;
