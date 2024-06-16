import api from "@/lib/axios";
import * as yup from "yup";

export const productSchema = yup
  .object({
    name: yup.string().required(),
    description: yup.string().required(),
    quantity: yup.number().required(),
    price: yup.number().required(),
    measurement: yup.string().required(),
    status: yup.string().required(),
  })
  .required();

export type ProductInput = yup.InferType<typeof productSchema>;

type ProductFilter = {
  name?: string;
  status?: string;
  id?: string;
};

export const getProductById = async (id: string) => {
  const baseUrl = new URL(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);

  return api.get<Product>(baseUrl.toString()).then((res) => res.data);
};

export const getProducts = async (filter?: ProductFilter) => {
  const searchParams: Record<string, any> = new URLSearchParams();

  if (filter && filter.name) searchParams.append("name", filter.name);
  if (filter && filter.status) searchParams.append("status", filter.status);
  if (filter && filter.id) searchParams.append("id", filter.id);

  // Construct the base URL
  const baseUrl = new URL(`${process.env.NEXT_PUBLIC_API_URL}/products`);

  // Attach search parameters to the base URL
  baseUrl.search = searchParams.toString();

  console.log(baseUrl.toString());

  return api.get<Product[]>(baseUrl.toString()).then((res) => res.data);
};

export const postProduct = async (data: any) => {
  return api.post<Product>("/products", data).then((res) => res.data);
};

export const putProduct = async ({ id, data }: any) => {
  return api.put<Product>(`/products/${id}`, data).then((res) => res.data);
};

export const deleteProduct = async (id: string) => {
  return api.delete<Product>(`/products/${id}`).then((res) => res.data);
};
