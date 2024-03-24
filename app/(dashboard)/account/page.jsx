"use client";

import AccountForm from "@/components/AccountForm";
import { signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function AccountPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    username: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/users/${session?.user.id}`);
      const data = await response.json();

      setUser({
        username: data.username,
        email: data.email,
      });
    };

    if (session?.user.id) fetchUser();
  }, [session?.user.id]);

  return (
    <section>
      <div className="container">
        <h1>Account Page</h1>
        <AccountForm user={user} setUser={setUser} />
      </div>
    </section>
  );
}

export default AccountPage;
