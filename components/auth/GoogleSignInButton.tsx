"use client";

import { useAuth } from "@/hooks/useAuth";
import { Button } from "../ui/button";

const GoogleSignInButton = () => {
  const { status, signInWithGoogle } = useAuth();

  const isLoading = status === "loading";

  return (
    <Button
      type="button"
      size="sm"
      className="bg-indigo-400 text-black hover:bg-indigo-500"
      onClick={signInWithGoogle}
      disabled={isLoading}
      aria-label="Sign in with Google"
    >
      {isLoading ? "Signing in..." : "Sign in with Google"}
    </Button>
  );
};

export default GoogleSignInButton;