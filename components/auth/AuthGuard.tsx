"use client";

import { useAuth } from "@/hooks/useAuth";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
  redirectTo?: string;
};

const AuthGuard = ({ children, redirectTo = "/login" }: Props) => {
  const { isAuthenticated, status } = useAuth();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center py-10 text-sm text-slate-400">
        Checking session...
      </div>
    );
  }

  if (!isAuthenticated) {
    router.push(redirectTo);
    return null;
  }

  return <>{children}</>;
};

export default AuthGuard;