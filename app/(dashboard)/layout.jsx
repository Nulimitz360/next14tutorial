import React from "react";

function DashboardLayout({ children }) {
  return (
    <div>
      Dashboard
      <main>{children}</main>
    </div>
  );
}

export default DashboardLayout;
