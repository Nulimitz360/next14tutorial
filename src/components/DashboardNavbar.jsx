"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    name: "Property",
    path: "#",
  },
  {
    name: "Account",
    path: "/account",
  },
];

const DashboardNavbar = () => {
  const session = true;

  const pathname = usePathname();

  return (
    <nav className="d-flex align-items-center justify-content-between p-4">
      <div>
        <Link href="/" className="navbar-brand">
          Regen
        </Link>
      </div>
      <div className="d-flex flex-row align-items-center gap-4">
        {routes.map((route, idx) => (
          <Link
            href={route.path}
            className={`nav-link ${pathname === route.path && "active"}`}
            key={idx}
          >
            {route.name}
          </Link>
        ))}
        <span>Logout</span>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
