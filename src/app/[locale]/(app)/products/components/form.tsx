import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/header";
import { useTranslations } from "next-intl";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { UseMutationResult } from "@tanstack/react-query";
import { Link } from "@/navigation";
import { ProductInput, productSchema } from "@/services/products";
import { useToast } from "@/components/ui/use-toast";

type ProductFormProps = {
  title: string;
  mutation: UseMutationResult;
  defaultValues?: ProductInput;
  onSubmit?(data: ProductInput): void;
};

export function ProductForm({
  onSubmit,
  defaultValues,
  title,
  mutation,
}: ProductFormProps) {
  const { toast } = useToast();
  const t = useTranslations("product");
  const form = useForm<ProductInput>({
    resolver: yupResolver(productSchema),
    defaultValues,
  });

  const onInternalSubmit: SubmitHandler<ProductInput> = (data) => {
    onSubmit && onSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onInternalSubmit)}>
        <div className="min-h-screen flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <Header />
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-7 w-7"
                  asChild
                >
                  <Link href="/products">
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Back</span>
                  </Link>
                </Button>
                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                  {title}
                </h1>
                <div className="hidden items-center gap-2 md:ml-auto md:flex">
                  <Button
                    type="reset"
                    variant="outline"
                    size="sm"
                    onClick={() => form.reset()}
                  >
                    {t("discard")}
                  </Button>
                  <Button size="sm" disabled={mutation?.isPending}>
                    {t("save")}
                  </Button>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                  <Card x-chunk="dashboard-07-chunk-0">
                    <CardHeader>
                      <CardTitle>{t("productDetails")}</CardTitle>
                      <CardDescription>
                        {t("productDescription")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("name")}</FormLabel>
                              <FormControl>
                                <Input className="w-full" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("description")}</FormLabel>
                              <FormControl>
                                <Textarea className="min-h-32" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                  </Card>
                  <Card x-chunk="dashboard-07-chunk-1">
                    <CardHeader>
                      <CardTitle>{t("stock.title")}</CardTitle>
                      <CardDescription>{t("stock.subtitle")}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6">
                        <div className="grid grid-flow-col gap-3">
                          <FormField
                            control={form.control}
                            name="measurement"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t("measurement")}</FormLabel>
                                <FormControl>
                                  <Select
                                    onValueChange={field.onChange}
                                    {...field}
                                  >
                                    <SelectTrigger
                                      id="measurement"
                                      aria-label={t("select")}
                                    >
                                      <SelectValue placeholder={t("select")} />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="g">
                                        {t("measurementOfUnit.g")}
                                      </SelectItem>
                                      <SelectItem value="un">
                                        {t("measurementOfUnit.un")}
                                      </SelectItem>
                                      <SelectItem value="ml">
                                        {t("measurementOfUnit.ml")}
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormControl>
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="quantity"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t("quantity")}</FormLabel>
                                <FormControl>
                                  <Input type="number" {...field} />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="price"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("price")}</FormLabel>
                              <FormControl>
                                <Input type="number" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                  <Card x-chunk="dashboard-07-chunk-3">
                    <CardHeader>
                      <CardTitle>{t("productStatus.title")}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6">
                        <FormField
                          control={form.control}
                          name="status"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("status")}</FormLabel>
                              <FormControl>
                                <Select
                                  onValueChange={field.onChange}
                                  {...field}
                                >
                                  <SelectTrigger
                                    id="status"
                                    aria-label={t("status")}
                                  >
                                    <SelectValue placeholder={t("select")} />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="draft">
                                      {t("productStatus.draft")}
                                    </SelectItem>
                                    <SelectItem value="internal">
                                      {t("productStatus.internal")}
                                    </SelectItem>
                                    <SelectItem value="published">
                                      {t("productStatus.published")}
                                    </SelectItem>
                                    <SelectItem value="archived">
                                      {t("productStatus.archived")}
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 md:hidden">
                <Button variant="outline" size="sm">
                  Discard
                </Button>
                <Button type="submit" size="sm">
                  Save Product
                </Button>
              </div>
            </div>
          </main>
        </div>
      </form>
    </Form>
  );
}
