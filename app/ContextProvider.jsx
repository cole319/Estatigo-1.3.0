import React from "react";
import Navbar from "./_components/Navbar";

export default function ContextProvider({ children }) {
  return (
    <div>
      <Navbar />
      <div className="mt-[72px]">{children}</div>
    </div>
  );
}
