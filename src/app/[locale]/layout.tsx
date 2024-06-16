import type { Metadata } from "next";
import { Inter, Open_Sans, Rubik } from "next/font/google";
import "@/app/globals.css";
import Providers from "@/components/providers";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { PropsWithChildren } from "react";

const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps extends PropsWithChildren {
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  // Providing all messages to the client
  // side is the easiest way to get startedxw
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
