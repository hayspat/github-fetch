import React from "react";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className="bg-white mx-auto container min-h-screen">
      {props.children}
    </div>
  );
};

export default Layout;
