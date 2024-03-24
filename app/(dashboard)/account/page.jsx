"use client";

import AccountForm from "@/components/AccountForm";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function AccountPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    username: "",
  });
  const [submitting, setIsSubmitting] = useState(false);

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

  const updateUser = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/users/${session?.user.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          username: setUser.username,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <div className="container">
        <h1>Account Page</h1>
        <AccountForm
          user={user}
          setUser={setUser}
          submitting={submitting}
          handleSubmit={updateUser}
        />
      </div>
    </section>
  );
}

export default AccountPage;
