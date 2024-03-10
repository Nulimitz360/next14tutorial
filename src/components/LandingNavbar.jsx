import Link from "next/link";

const LandingNavbar = () => {
  const session = true;
  return (
    <nav className="d-flex align-items-center justify-content-between p-4">
      <div>
        <Link href="/" className="navbar-brand">
          Regen
        </Link>
      </div>
      <div className="d-flex flex-row align-items-center gap-4">
        {session ? (
          <>
            <Link href="/account" className="btn btn-outline-success">
              Open App
            </Link>
            <span>Signout</span>
          </>
        ) : (
          <span>Login</span>
        )}
      </div>
    </nav>
  );
};

export default LandingNavbar;
