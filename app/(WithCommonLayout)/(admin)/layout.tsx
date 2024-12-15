import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <>
  <h1>from adim layout</h1>
  {children}
  </>;
};

export default layout;
