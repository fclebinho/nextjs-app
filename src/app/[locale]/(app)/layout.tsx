import Sidebar from "@/components/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <TooltipProvider>
      <div className="flex min-h-[calc(100vh_-_theme(spacing.16))] w-full flex-col bg-muted/40">
        <Sidebar />
        {children}
      </div>
    </TooltipProvider>
  );
}
