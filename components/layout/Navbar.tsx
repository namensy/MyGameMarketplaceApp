"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

const Navbar = () => {
  const { user, status, logout, signInWithGoogle } = useAuth();
  const isLoading = status === "loading";

  return (
    <header className="w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-screen items-center justify-between px-4">
        <div className="flex items-center justify-center gap-4">
          <Link href="/">
            <Image src="/images/king.png" width={36} height={36} alt="King Logo" />
          </Link>
          <Link href="/">
            <span className="font-semibold">Orifuke Games</span>
          </Link>
          <Link href="/games">
            <Button
              className="bg-indigo-400 text-black hover:bg-indigo-500 uppercase"
              size="sm"
              aria-label="Store"
            >
              Store
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {isLoading && (
            <span className="text-xs text-slate-400">Checking session...</span>
          )}

          {user && !isLoading ? (
            <>
              <div className="flex items-center gap-2 text-xs text-slate-100">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-[11px] font-medium">
                  {user.displayName?.[0] ?? "U"}
                </div>
                <div className="hidden flex-col sm:flex">
                  <span className="font-medium leading-tight">
                    {user.displayName ?? "User"}
                  </span>
                  {user.email && (
                    <span className="text-[11px] text-slate-400">
                      {user.email}
                    </span>
                  )}
                </div>
              </div>
              <Button
                className="bg-slate-800 text-slate-100 hover:bg-slate-700"
                size="sm"
                onClick={logout}
                aria-label="Sign out"
              >
                Sign out
              </Button>
            </>
          ) : (
            <Button
              className="bg-indigo-400 text-black hover:bg-indigo-500"
              size="sm"
              aria-label="Sign in"
              onClick={signInWithGoogle}
            >
              Sign In
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;