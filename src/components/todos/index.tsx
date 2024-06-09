"use client";

import { useTranslations } from "next-intl";
import { getTodos } from "@/services/todo";
import { useQuery } from "@tanstack/react-query";
import React from "react";

type TodosProps = {
  title: string;
};

const Todos: React.FC<TodosProps> = ({ title }) => {
  const { data } = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  return (
    <div>
      <h1 className="text-primary font-bold mb-4">{title}</h1>
      {data?.map((todo) => (
        <div key={todo.id}>{todo.description}</div>
      ))}
    </div>
  );
};

export default Todos;
