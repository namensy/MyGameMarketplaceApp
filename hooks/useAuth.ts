"use client";

// Hook กลางสำหรับจัดการ Firebase Auth + sync state เข้า Zustand

import { useEffect, useCallback } from "react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase/firebaseClient";
import { useAuthStore } from "@/lib/store/useAuthStore";

export function useAuth() {
  const { user, status, setUser, setStatus, reset } = useAuthStore();

  // subscribe auth state ครั้งเดียวต่อ lifecycle ของแอป
  useEffect(() => {
    setStatus("loading");

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const { uid, displayName, email, photoURL } = firebaseUser;
        setUser({ uid, displayName, email, photoURL });
        setStatus("authenticated");
      } else {
        reset();
      }
    });

    return () => unsubscribe();
  }, [reset, setStatus, setUser]);

  const signInWithGoogle = useCallback(async () => {
    setStatus("loading");
    try {
      await signInWithPopup(auth, googleProvider);
      // onAuthStateChanged จะอัปเดต store ให้เอง
    } catch (err) {
      console.error("Google sign-in failed", err);
      setStatus("unauthenticated");
    }
  }, [setStatus]);

  const logout = useCallback(async () => {
    setStatus("loading");
    try {
      await signOut(auth);
      reset();
    } catch (err) {
      console.error("Sign-out failed", err);
      setStatus("authenticated");
    }
  }, [reset, setStatus]);

  return {
    user,
    status,
    isAuthenticated: !!user,
    signInWithGoogle,
    logout,
  };
}
