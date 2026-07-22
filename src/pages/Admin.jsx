import { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";
const courses = [
  "ADCA",
  "DCA",
  "CCC",
  "DFA",
  "CCFA",
  "DTP",
  "Tally",
  "Advanced Excel",
  "A.C & Refrigeration",
  "House Wiring",
];
function Admin() {
  const [enquiries, setEnquiries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const res = await axios.get(
        "https://rama-technical-institute.onrender.com/api/admin"
      );

      setEnquiries(res.data.data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch enquiries.");
    }
  };

  // Delete Enquiry
  const deleteEnquiry = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/admission/${id}`
      );

      alert("Enquiry Deleted Successfully");

      fetchEnquiries();

    } catch (error) {
      console.error(error);
      alert("Delete Failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  }}
>
  <div
    style={{
      background: "#0B3D91",
      color: "white",
      padding: "20px",
      borderRadius: "10px",
    }}
  >
    <h3>Total Enquiries</h3>
    <h1>{enquiries.length}</h1>
  </div>

  <div
    style={{
      background: "#198754",
      color: "white",
      padding: "20px",
      borderRadius: "10px",
    }}
  >
    <h3>Today's Enquiries</h3>
    <h1>{enquiries.length}</h1>
  </div>

  <div
    style={{
      background: "#6F42C1",
      color: "white",
      padding: "20px",
      borderRadius: "10px",
    }}
  >
    <h3>Total Courses</h3>
    <h1>{courses.length}</h1>
  </div>

  <div
    style={{
      background: "#FD7E14",
      color: "white",
      padding: "20px",
      borderRadius: "10px",
    }}
  >
    <h3>Pending</h3>
    <h1>{enquiries.length}</h1>
  </div>
</div>
      <h1>Rama Technical Institute</h1>

      <h2>Admin Dashboard</h2>
      <div style={{ margin: "20px 0" }}>
  <input
    type="text"
    placeholder="🔍 Search by Name, Phone or Course..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{
      width: "100%",
      padding: "12px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      outline: "none",
    }}
  />
</div>
      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          marginTop: "20px",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Course</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {enquiries.filter((student) => {
  const keyword = search.toLowerCase();

  return (
    student.name.toLowerCase().includes(keyword) ||
    student.phone.includes(search) ||
    student.course.toLowerCase().includes(keyword)
  );
}).length > 0 ? (
  enquiries
    .filter((student) => {
      const keyword = search.toLowerCase();

      return (
        student.name.toLowerCase().includes(keyword) ||
        student.phone.includes(search) ||
        student.course.toLowerCase().includes(keyword)
      );
    })
    .map((student) => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.phone}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
                <td>{student.message}</td>

                <td>
                  <button
                    onClick={() => deleteEnquiry(student._id)}
                    style={{
                      background: "red",
                      color: "white",
                      border: "none",
                      padding: "8px 14px",
                      cursor: "pointer",
                      borderRadius: "5px",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                style={{ textAlign: "center" }}
              >
                No Enquiries Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;