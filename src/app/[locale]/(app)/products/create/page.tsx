"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ProductForm } from "../components/form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProductInput, postProduct } from "@/services/products";

const ProductCreate: React.FC = () => {
  const t = useTranslations("product");
  // Access the client
  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation({
    mutationFn: postProduct,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const onSubmit = (data: ProductInput) => {
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <ProductForm
      title={t("addProduct")}
      mutation={mutation}
      onSubmit={onSubmit}
      defaultValues={
        {
          measurement: "un",
          status: "internal",
        } as Product
      }
    />
  );
};

export default ProductCreate;
