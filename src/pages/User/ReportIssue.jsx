import { useState } from "react";
import api from "../../api/axios";
import Navbar from "../../components/Navbar";

export default function ReportIssue() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    severity: "Low",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitIssue = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await api.post(
        "/issues",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Issue reported successfully");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to report issue");
    }
  };

  return (
    <>
      <Navbar />
      <h2>Report an Issue</h2>

      <form onSubmit={submitIssue}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          required
        />

        <select name="category" onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Road">Road</option>
          <option value="Garbage">Garbage</option>
          <option value="Water">Water</option>
          <option value="Electricity">Electricity</option>
        </select>

        <select name="severity" onChange={handleChange}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
