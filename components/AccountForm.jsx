function AccountForm({ user, setUser, submitting, handleSubmit }) {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="col-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              value={user.username}
              className="form-control"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
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
            <button
              type="submit"
              className="btn btn-success"
              disabled={submitting}
            >
              {submitting ? `Saving ...` : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AccountForm;
