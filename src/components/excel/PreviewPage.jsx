// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./PreviewPage.css";

// const PreviewPage = () => {
//   const [customers, setCustomers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // ✅ Fetch OCR Data
//   const fetchData = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:5000/api/ocr"
//       );

//       console.log("OCR Data:", res.data);

//       // 🔥 IMPORTANT
//       // assuming each record has: { customers: [] }
//       const latest = res.data.data[0];

//       setCustomers(latest?.customers || []);

//     } catch (err) {
//       alert("Failed to fetch OCR data ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // ✏️ Edit handler
//   const handleChange = (index, field, value) => {
//     const updated = [...customers];
//     updated[index][field] = value;
//     setCustomers(updated);
//   };

//   // ❌ Delete row
//   const handleDelete = (index) => {
//     const updated = customers.filter((_, i) => i !== index);
//     setCustomers(updated);
//   };

//   // 💾 Save to DB
//   const handleSave = async () => {
//     try {
//       await axios.post(
//         "http://localhost:5000/api/customers/bulk",
//         customers
//       );

//       alert("Saved successfully ✅");

//     } catch (err) {
//       alert("Save failed ❌");
//     }
//   };

//   return (
//     <div className="preview-container">
//       <h2>OCR Preview & Edit</h2>

//       {loading ? (
//         <p>Loading...</p>
//       ) : customers.length === 0 ? (
//         <p>No OCR data found</p>
//       ) : (
//         <>
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Phone</th>
//                 <th>Total</th>
//                 <th>Paid</th>
//                 <th>Balance</th>
//                 <th>Due Date</th>
//                 <th>Status</th>
//                 <th>Action</th>
//               </tr>
//             </thead>

//             <tbody>
//               {customers.map((c, i) => (
//                 <tr key={i}>
//                   <td>
//                     <input
//                       value={c.name || ""}
//                       onChange={(e) =>
//                         handleChange(i, "name", e.target.value)
//                       }
//                     />
//                   </td>

//                   <td>
//                     <input
//                       value={c.phone || ""}
//                       onChange={(e) =>
//                         handleChange(i, "phone", e.target.value)
//                       }
//                     />
//                   </td>

//                   <td>
//                     <input
//                       type="number"
//                       value={c.totalCredit || ""}
//                       onChange={(e) =>
//                         handleChange(i, "totalCredit", e.target.value)
//                       }
//                     />
//                   </td>

//                   <td>
//                     <input
//                       type="number"
//                       value={c.paid || ""}
//                       onChange={(e) =>
//                         handleChange(i, "paid", e.target.value)
//                       }
//                     />
//                   </td>

//                   <td>
//                     <input
//                       type="number"
//                       value={c.balance || ""}
//                       onChange={(e) =>
//                         handleChange(i, "balance", e.target.value)
//                       }
//                     />
//                   </td>

//                   <td>
//                     <input
//                       type="date"
//                       value={
//                         c.dueDate
//                           ? new Date(c.dueDate)
//                               .toISOString()
//                               .split("T")[0]
//                           : ""
//                       }
//                       onChange={(e) =>
//                         handleChange(i, "dueDate", e.target.value)
//                       }
//                     />
//                   </td>

//                   <td>
//                     <select
//                       value={c.status || "Pending"}
//                       onChange={(e) =>
//                         handleChange(i, "status", e.target.value)
//                       }
//                     >
//                       <option>Pending</option>
//                       <option>Paid</option>
//                       <option>Overdue</option>
//                     </select>
//                   </td>

//                   <td>
//                     <button
//                       className="delete-btn"
//                       onClick={() => handleDelete(i)}
//                     >
//                       ❌
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <button className="save-btn" onClick={handleSave}>
//             💾 Save All Customers
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default PreviewPage;






// import React, { useState } from "react";
// import axios from "axios";

// const PreviewPage = ({ customers, setCustomers, goBack }) => {
//   const [saving, setSaving] = useState(false);

//   // ✏️ Handle Edit
//   const handleChange = (index, field, value) => {
//     const updated = [...customers];
//     updated[index][field] = value;

//     // ✅ Auto calculate balance
//     const total = Number(updated[index].totalCredit || 0);
//     const paid = Number(updated[index].paid || 0);
//     updated[index].balance = total - paid;

//     setCustomers(updated);
//   };

//   // 💾 Save Data
//   const handleSave = async () => {
//     try {
//       setSaving(true);

//       await axios.post(
//         "http://localhost:5000/api/photo/save-ocr-data",
//         { customers }
//       );

//       alert("Data saved successfully");

//       goBack(); // go back to upload page

//     } catch (error) {
//       alert("Save failed");
//     } finally {
//       setSaving(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Edit & Confirm Data</h2>

//       <button onClick={goBack}>⬅ Back</button>

//       <br /><br />

//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Total Credit</th>
//             <th>Paid</th>
//             <th>Balance</th>
//             <th>Due Date</th>
//             <th>Status</th>
//           </tr>
//         </thead>

//         <tbody>
//           {customers.map((c, index) => (
//             <tr key={index}>
//               <td>
//                 <input
//                   value={c.name || ""}
//                   onChange={(e) =>
//                     handleChange(index, "name", e.target.value)
//                   }
//                 />
//               </td>

//               <td>
//                 <input
//                   value={c.phone || ""}
//                   onChange={(e) =>
//                     handleChange(index, "phone", e.target.value)
//                   }
//                 />
//               </td>

//               <td>
//                 <input
//                   type="number"
//                   value={c.totalCredit || ""}
//                   onChange={(e) =>
//                     handleChange(index, "totalCredit", e.target.value)
//                   }
//                 />
//               </td>

//               <td>
//                 <input
//                   type="number"
//                   value={c.paid || ""}
//                   onChange={(e) =>
//                     handleChange(index, "paid", e.target.value)
//                   }
//                 />
//               </td>

//               <td>₹{c.balance || 0}</td>

//               <td>
//                 <input
//                   type="date"
//                   value={
//                     c.dueDate
//                       ? new Date(c.dueDate).toISOString().split("T")[0]
//                       : ""
//                   }
//                   onChange={(e) =>
//                     handleChange(index, "dueDate", e.target.value)
//                   }
//                 />
//               </td>

//               <td>
//                 <input
//                   value={c.status || ""}
//                   onChange={(e) =>
//                     handleChange(index, "status", e.target.value)
//                   }
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <br />

//       <button onClick={handleSave} disabled={saving}>
//         {saving ? "Saving..." : "💾 Save Data"}
//       </button>
//     </div>
//   );
// };

// export default PreviewPage;



import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const UploadPreview = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [customers, setCustomers] = useState(state?.customers || []);
  const [rawText, setRawText] = useState(state?.rawText || "");
  const imagePreview = state?.imagePreview;

  // edit
  const handleChange = (i, field, value) => {
    const updated = [...customers];
    updated[i][field] = value;

    // if (field === "totalCredit" || field === "paidAmount") {
    //   updated[i].balance =
    //     (updated[i].totalCredit || 0) -
    //     (updated[i].paidAmount || 0);
    // }

    setCustomers(updated);
  };

  // save
  const handleSave = async () => {
    await axios.post("https://credit-server-bea3.onrender.com/api/upload/ocr", {
      customers:customers,
      rawText
    });

    alert("Saved");

    navigate("/dashboard");
  };

//   const handleSave = async () => {

//   const formattedCustomers = customers.map(c => ({
//     name: c.name || "",
//     phone: c.phone || "",
//     totalCredit: String(c.totalCredit || 0),
//     paidAmount: String(c.paidAmount || 0),
//     balance: String(c.balance || 0),

//     // ✅ convert date properly
//     dueDate: c.dueDate
//       ? new Date(c.dueDate).toISOString().split("T")[0]
//       : "",

//     status: (c.balance || 0) > 0 ? "Pending" : "Paid"
//   }));

//   await axios.post("http://localhost:5000/api/customers", {
//     customers: formattedCustomers,
//     rawText
//   });

//   alert("Saved");
//   navigate("/dashboard");
// };


  console.log(customers,"customerssssssssss");
  

  return (
    <div style={{ padding: 20 }}>
      <h2>Preview & Edit</h2>

      {imagePreview && (
        <img src={imagePreview} width="300" alt="" />
      )}

      <h3>Raw Text</h3>
      <textarea
        value={rawText}
        onChange={(e) => setRawText(e.target.value)}
        rows={5}
        style={{ width: "100%" }}
      />

      <h3>Editable Table</h3>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Total</th>
            <th>Paid</th>
            <th>Balance</th>
            <th>Due Date</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((c, i) => (
            <tr key={i}>
              <td>
                <input
                  value={c.name || ""}
                  onChange={(e) =>
                    handleChange(i, "name", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  value={c.phone || ""}
                  onChange={(e) =>
                    handleChange(i, "phone", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  type=""
                  value={c.totalCredit}
                  onChange={(e) =>
                    handleChange(i, "totalCredit", Number(e.target.value))
                  }
                />
              </td>

              <td>
                <input
                  type=""
                  value={c.paidAmount}
                  onChange={(e) =>
                    handleChange(i, "paidAmount", Number(e.target.value))
                  }
                />
              </td>


              <td>
                <input
                  type=""
                  value={c.balance}
                  onChange={(e) =>
                    handleChange(i, "balance", Number(e.target.value))
                  }
                />
              </td>

              

               {/* <td>
                <input
                  type="date"
                  value={c.dueDate || 0}
                  onChange={(e) =>
                    handleChange(i, "dueDate", Date(e.target.value))
                  }
                />
              </td> */}

              <td>
  <input
    type="date"
    value={
      c.dueDate
        ? new Date(c.dueDate).toISOString().split("T")[0]
        : ""
    }
    onChange={(e) =>
      handleChange(i, "dueDate", new Date(e.target.value))
    }
  />
</td>


            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <button onClick={handleSave}>💾 Save</button>
    </div>
  );
};

export default UploadPreview;


