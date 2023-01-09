import React from "react";

type PageProps = {
  params: {
    id: number;
  };
};

const fetchTodo = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const todo: Todo = await res.json();
  return todo;
};

async function TodoPage({ params: { id } }: PageProps) {
  const todo = await fetchTodo(id);
  return (
    <div className="p-10 bg-yellow-50 border-2 m-2 shadow-xl">
      <p>
        ID: {todo.id} , {todo.title}
      </p>
      <p>Completed: {todo.complete ? "yes" : "No"}</p>
      <p className="border-t border-black mt-5 text-right"> By User: {todo.userId} </p>
    </div>
  );
}

export default TodoPage;
