"use client";

import { useLoading } from "../hooks/useLoading";

const Loading = () => {
  const isLoading = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex h-full w-full flex-col items-center justify-center bg-white">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-secondaryColor border-t-transparent">
        <span className="sr-only">Loading...</span>
      </div>

      <p className="mt-4 text-lg font-semibold text-secondaryColor">Cargando...</p>
    </div>
  );
};

export default Loading;
