import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div style={styles.nav}>
      <h3 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        CrowdSource
      </h3>

      <div>
        {role === "user" && (
          <>
            <button onClick={() => navigate("/user/dashboard")}>Dashboard</button>
            <button onClick={() => navigate("/user/report")}>Report Issue</button>
            <button onClick={() => navigate("/user/myposts")}>My Posts</button>
          </>
        )}

        {role === "club" && (
          <>
            <button onClick={() => navigate("/club/dashboard")}>Dashboard</button>
            <button onClick={() => navigate("/club/history")}>History</button>
          </>
        )}

        {role === "admin" && (
          <button onClick={() => navigate("/government/dashboard")}>
            Dashboard
          </button>
        )}

        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#222",
    color: "#fff",
  },
};

export default Navbar;
