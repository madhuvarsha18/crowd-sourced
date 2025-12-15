import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>Community Issue Reporting System</h1>
      <p>Report, track, and resolve public issues together</p>

      <div style={styles.buttons}>
        <button onClick={() => navigate("/login?role=user")}>
          User
        </button>

        <button onClick={() => navigate("/login?role=club")}>
          Club / NGO
        </button>

        <button onClick={() => navigate("/login?role=admin")}>
          Admin / Government
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px"
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px"
  }
};

export default Landing;
