import { cn } from "@/utils/cn";
import { Suspense, type ReactNode } from "react";
import { SidebarTrigger } from "../ui/sidebar";
import { PendingInvitationCounter } from "./PendingInvitationCounter";
import { UserNav } from "./UserNav";

export async function InternalNavbar({ children }: { children: ReactNode }) {
  return (
    <header className="sticky top-0 w-full z-10 backdrop-blur-sm bg-background">
      <div
        className={cn(
          "h-full  text-sm font-medium flex gap-2 mx-auto pl-6 pr-6 border-b dark:border-gray-700/50 py-3 w-full justify-between items-center",
        )}
      >
        <SidebarTrigger />
        <Suspense>{children}</Suspense>
        <div className="relative w-max flex items-center gap-2">
          <div className="hidden lg:flex items-center gap-2">
            <div className="flex items-center gap-2">
              <PendingInvitationCounter />
            </div>
          </div>
          <div className="w-px h-5 mr-4 ml-2 bg-neutral-200 dark:bg-neutral-700" />
          <div className="relative w-max flex items-center space-x-3">
            <Suspense>
              <UserNav />
            </Suspense>
          </div>
        </div>
      </div>
    </header>
  );
}
