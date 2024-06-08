"use client";

import { Button } from "@/components/ui/button";
import { getTodos } from "@/services/todo";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Todos: React.FC = () => {
  const { data } = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  return (
    <div>
      <h1 className="text-primary font-bold mb-4">My Todos</h1>
      {data?.map((todo) => (
        <div key={todo.id}>{todo.description}</div>
      ))}
    </div>
  );
};

export default Todos;
