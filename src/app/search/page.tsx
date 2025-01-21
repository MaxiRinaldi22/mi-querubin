"use client";

import { Suspense } from "react";
import { SearchResults } from "./SearchResults";

const SearchPage = () => {
  return (
    <Suspense fallback={<p>Cargando resultados...</p>}>
      <SearchResults />
    </Suspense>
  );
};

export default SearchPage;
