import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [enquiries, setEnquiries] = useState([]);
  const [search, setSearch] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [editData, setEditData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });


  // Fetch Enquiries
  const fetchEnquiries = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/admission"
      );

      setEnquiries(res.data.data);

    } catch (error) {
      console.error(error);
      alert("Failed to fetch enquiries");
    }
  };


  useEffect(() => {
    fetchEnquiries();
  }, []);



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



  // Start Edit
  const startEdit = (student) => {

    setEditingId(student._id);

    setEditData({
      name: student.name,
      phone: student.phone,
      email: student.email,
      course: student.course,
      message: student.message,
    });

  };



  // Update Enquiry
  const updateEnquiry = async () => {
  try {

    console.log("Editing ID:", editingId);
    console.log("URL:", `http://localhost:5000/api/admission/${editingId}`);
    console.log("Data:", editData);

    await axios.put(
      `http://localhost:5000/api/admission/${editingId}`,
      editData
    );

    alert("Updated Successfully");
    setEditingId(null);
    fetchEnquiries();

  } catch (error) {
    console.error(error);
    alert("Update Failed");
  }
};



  const filteredEnquiries = enquiries.filter((student)=>{

    const keyword = search.toLowerCase();

    return (
      student.name.toLowerCase().includes(keyword) ||
      student.phone.includes(search) ||
      student.course.toLowerCase().includes(keyword)
    );

  });



  return (

    <div style={{padding:"40px"}}>


      <h2>Admin Dashboard</h2>


      <input
        type="text"
        placeholder="🔍 Search by Name, Phone or Course"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}

        style={{
          width:"100%",
          padding:"12px",
          margin:"20px 0",
          borderRadius:"8px",
          border:"1px solid #ccc",
          fontSize:"16px"
        }}

      />



      {/* Edit Form */}

      {editingId && (

        <div
          style={{
            border:"1px solid #ccc",
            padding:"20px",
            marginBottom:"30px",
            borderRadius:"10px"
          }}
        >

          <h3>Edit Enquiry</h3>


          {
            Object.keys(editData).map((field)=>(

              <input
                key={field}
                value={editData[field]}
                onChange={(e)=>
                  setEditData({
                    ...editData,
                    [field]:e.target.value
                  })
                }

                placeholder={field}

                style={{
                  display:"block",
                  width:"100%",
                  padding:"10px",
                  margin:"10px 0"
                }}

              />

            ))
          }


          <button
            onClick={updateEnquiry}
            style={{
              background:"green",
              color:"white",
              padding:"10px 20px",
              border:"none",
              cursor:"pointer"
            }}
          >
            Update
          </button>


          <button
            onClick={()=>setEditingId(null)}
            style={{
              marginLeft:"10px",
              padding:"10px 20px"
            }}
          >
            Cancel
          </button>


        </div>

      )}
<input
  type="text"
  placeholder="Search by Name or Course"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
      <table
        border="1"
        width="100%"
        cellPadding="10"
        style={{
          borderCollapse:"collapse"
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


        {
          filteredEnquiries.length > 0 ?

          filteredEnquiries.map((student)=>(


            <tr key={student._id}>

              <td>{student.name}</td>

              <td>{student.phone}</td>

              <td>{student.email}</td>

              <td>{student.course}</td>

              <td>{student.message}</td>


              <td>

                <button
                  onClick={()=>startEdit(student)}
                  style={{
                    background:"blue",
                    color:"white",
                    border:"none",
                    padding:"8px",
                    marginRight:"5px"
                  }}
                >
                  Edit
                </button>


                <button
                  onClick={()=>deleteEnquiry(student._id)}
                  style={{
                    background:"red",
                    color:"white",
                    border:"none",
                    padding:"8px"
                  }}
                >
                  Delete
                </button>


              </td>


            </tr>


          ))

          :

          <tr>

            <td colSpan="6" align="center">
              No Enquiries Found
            </td>

          </tr>

        }


        </tbody>


      </table>


    </div>

  );

}


export default Admin;