"use client";
import { useSession } from "next-auth/react";

function AccountForm({ user, setUser }) {
  const { data: session } = useSession();

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="col-5">
        <form>
          <div className="mb-3">
            <input
              type="text"
              defaultValue={user.username}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              disabled
              value={user.email}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AccountForm;
