"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="d-flex justify-content-between align-items-center p-4">
      <Link href="/" className="navbar-nav">
        NextJS Starter
      </Link>

      <div className="d-flex flex-row gap-4 align-items-center">
        {session?.user ? (
          <>
            <Link href="#" className="btn btn-outline-success">
              Open App
            </Link>

            <button type="button" onClick={signOut} className="btn btn-danger">
              Sign Out
            </button>

            <Link href="#">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-circle"
                alt="profile"
              />
            </Link>
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="btn btn-success"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
