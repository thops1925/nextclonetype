import Link from "next/link";
import React from "react";

const fetchTodo = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todo: Todo[] = await res.json();
  return todo;
};

async function TodoList() {
  const todos = await fetchTodo();
  return (
    <>
      {todos.map((todos) => (
        <p key={todos.id}>
          <Link href={`/todo/${todos.id}`}>Todo:{todos.title}</Link>
        </p>
      ))}
    </>
  );
}

export default TodoList;
