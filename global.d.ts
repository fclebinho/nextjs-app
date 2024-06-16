import en from "./messages/en.json";

type Messages = typeof en_US;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {
    Todo: { title: string };
    product: {
      title: string;
      subtitle: string;
      createdAt: string;
      name: string;
      quantity: string;
      price: string;
      measurement: string;
      status: string;
      description: string;
      id: string;
      actions: string;
      edit: string;
      delete: string;
      add: string;
      save: string;
      cancel: string;
      confirm: string;
      discard: string;
      editProduct: string;
      addProduct: string;
      deleteProduct: string;
      productDetails: string;
      productDescription: string;
      yes: string;
      no: string;
      filter: string;
      export: string;
      messages: {
        confirmDelete: string;
        productDeleted: string;
        productAdded: string;
        productUpdated: string;
        productNotDeleted: string;
        productNotAdded: string;
        productNotUpdated: string;
        productNotFound: string;
        productNotSelected: string;
        productNotValid: string;
        productNotSaved: string;
        productNotEdited: string;
      };
      select: string;
      productStatus: {
        title: string;
        draft: string;
        internal: string;
        published: string;
        archived: string;
      };
      measurementOfUnit: {
        kg: string;
        g: string;
        l: string;
        ml: string;
        un: string;
      };
      stock: {
        title: string;
        subtitle: string;
      };
    };
  }

  interface Product {
    createdAt: Date;
    name: string;
    description: string;
    quantity: number;
    price: number;
    measurement: "kg" | "g" | "l" | "ml" | "un";
    status: "internal" | "published" | "draft" | "archived";
    id: string;
  }
}
