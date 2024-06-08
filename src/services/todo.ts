import api from "@/lib/axios";

type Todo = {
  createdAt: string;
  description: string;
  donne: boolean;
  id: string;
};

export const getTodos = async () => {
  return api.get<Todo[]>("/todos").then((res) => res.data);
};
