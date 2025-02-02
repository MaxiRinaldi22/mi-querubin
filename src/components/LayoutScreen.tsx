import type React from "react";

import Loading from "./LoadingComponent";

function LayoutScreen({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Loading />
      {children}
    </>
  );
}

export default LayoutScreen;
