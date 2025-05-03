import React from "react";

const Layout = ({ children, className }) => {
  return (
    <div className="grid grid-cols-12 h-dvh py-2 px-[18%] max-sm:px-2 bg-black ">
      {children}
    </div>
  );
};

export default Layout;
