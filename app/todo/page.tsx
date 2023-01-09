import Link from "next/link";
import React from "react";
import TodoList from "./TodoList";

const page = () => {
  return (
    <div>
      page
      <br />
      <Link href="/">home</Link>
      {/* @ts-ignore */}
      <TodoList />
    </div>
  );
};

export default page;
