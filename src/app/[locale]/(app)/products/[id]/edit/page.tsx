"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import React from "react";
import { ProductForm } from "../../components/form";
import { ProductInput, getProductById, putProduct } from "@/services/products";

type ProductParamsProps = {
  params: {
    id: string;
  };
};

const ProductEdit: React.FC<ProductParamsProps> = ({ params: { id } }) => {
  const t = useTranslations("product");
  const { data, isPending } = useQuery({
    queryKey: ["product"],
    queryFn: () => getProductById(id),
  });

  // Access the client
  const queryClient = useQueryClient();

  // Mutations
  const mutation = useMutation({
    mutationFn: putProduct,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const onSubmit = (data: ProductInput) => {
    console.log(data);
    mutation.mutate({ id, data });
  };

  if (isPending)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading
      </div>
    );

  return (
    <ProductForm
      title={t("editProduct")}
      mutation={mutation}
      onSubmit={onSubmit}
      defaultValues={data}
    />
  );
};

export default ProductEdit;
