import React from "react";

function LayoutWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-6xl mx-auto h-[calc(100dvh-80.4px)] py-12 px-4 md:px-5 lg:px-6 flex justify-center items-center">
      {children}
    </div>
  );
}

export default LayoutWrapper;
