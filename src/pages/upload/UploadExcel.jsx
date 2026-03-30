// import React, { useState } from "react";
// import ExcelUpload from "../../components/excel/ExcelUpload";
// import ExcelPreview from "../../components/excel/ExcelPreview";

// const UploadExcel = () => {
//   const [previewData, setPreviewData] = useState([]);

//   const handleUpload = (file) => {
//     // Later: send file to backend and get parsed data
//     console.log("Uploaded file:", file);
//   };

//   const handleConfirm = () => {
//     // Save previewData to database
//     console.log("Saving data:", previewData);
//     setPreviewData([]);
//   };

//   const handleCancel = () => {
//     setPreviewData([]);
//   };

//   return (
//     <div>
//       <ExcelUpload onUpload={handleUpload} />

//       {previewData.length > 0 && (
//         <ExcelPreview
//           data={previewData}
//           onConfirm={handleConfirm}
//           onCancel={handleCancel}
//         />
//       )}
//     </div>
//   );
// };
// export default UploadExcel;







// import React, { useState } from "react";
// import axios from "axios";
// import ExcelUpload from "../../components/excel/ExcelUpload";
// import ExcelPreview from "../../components/excel/ExcelPreview";

// const UploadExcel = () => {
//   const [previewData, setPreviewData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   // 📤 Upload Excel → Preview
//   const handleUpload = async (file) => {
//     setLoading(true);
//     setMessage("");

//     try {
//       const formData = new FormData();
//       formData.append("file", file);

//       const res = await axios.post(
//         "http://localhost:5000/api/excel/upload",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       setPreviewData(res.data.data);
//     } catch (error) {
//       setMessage("Excel upload failed");
//     } finally {
//       setLoading(false);
//     }
//   };


//   console.log(previewData,"priwwwwwwww");
  
//   // 💾 Confirm Save
//   const handleConfirm = async () => {
//     try {
//       await axios.post(
//         "http://localhost:5000/api/excel/save",
//         previewData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       setMessage("Data saved successfully");
//       setPreviewData([]);
//     } catch (error) {
//       setMessage("Saving data failed");
//     }
//   };

//   // ❌ Cancel Preview
//   const handleCancel = () => {
//     setPreviewData([]);
//     setMessage("Upload cancelled");
//   };

//   return (
//     <div>
//       <h2>Upload Customer Excel</h2>

//       {message && (
//         <div style={{ marginBottom: "10px", color: "green" }}>
//           {message}
//         </div>
//       )}

//       <ExcelUpload onUpload={handleUpload} loading={loading} />

//       {previewData.length > 0 && (
//         <ExcelPreview
//           data={previewData}
//           onConfirm={handleConfirm}
//           onCancel={handleCancel}
//         />
//       )}
//     </div>
//   );
// };

// export default UploadExcel;






// import React, { useState } from "react";
// import axios from "axios";
// import ExcelUpload from "../../components/excel/ExcelUpload";
// import ExcelPreview from "../../components/excel/ExcelPreview";

// const UploadExcel = () => {
//   const [previewData, setPreviewData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   // 🔄 Map Excel Response → Clean Data
//   // const mapExcelData = (rawData) => {
//   //   // skip title + header rows
//   //   return rawData.slice(2).map((row) => ({
//   //     name: row["Excel Sample Data"] || "",
//   //     phone: row["__EMPTY"] || "",
//   //     totalCredit: row["__EMPTY_1"] || 0,
//   //     paidAmount: row["__EMPTY_2"] || 0,
//   //     balance: row["__EMPTY_3"] || 0,
//   //     dueDate: row["__EMPTY_4"]
//   //       ? new Date((row["__EMPTY_4"] - 25569) * 86400 * 1000)
//   //       : null,
//   //     status: row["__EMPTY_5"] || "pending",
//   //   }));
//   // };

//   const mapExcelData = (rawData) => {
//   return rawData.slice(2).map((row) => ({
//     name: row["Excel Sample Data"] || "",
//     phone: row["__EMPTY"] || "",
//     totalCredit: Number(row["__EMPTY_1"]) || 0,
//     paidAmount: Number(row["__EMPTY_2"]) || 0,
//     balance: Number(row["__EMPTY_3"]) || 0,
//     dueDate: row["__EMPTY_4"]
//       ? new Date((row["__EMPTY_4"] - 25569) * 86400 * 1000).toISOString()
//       : null,
//     status:
//       String(row["__EMPTY_5"] || "PENDING").toUpperCase() === "PAID"
//         ? "PAID"
//         : "PENDING",
//   }));
// };


//   // 📤 Upload Excel → Preview
//   const handleUpload = async (file) => {
//     setLoading(true);
//     setMessage("");

//     try {
//       const formData = new FormData();
//       formData.append("file", file);

//       const res = await axios.post(
//         "http://localhost:5000/api/excel/upload",
//         formData,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );

//       const formattedData = mapExcelData(res.data.data);
//       setPreviewData(formattedData);
//     } catch (error) {
//       console.error(error);
//       setMessage("Excel upload failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 💾 Confirm Save
//   const handleConfirm = async () => {
//     try {
//       await axios.post(
//         "http://localhost:5000/api/excel/save",
//         previewData,
//         { headers: { "Content-Type": "application/json" } }
//       );

//       setMessage("Data saved successfully");
//       setPreviewData([]);
//     } catch (error) {
//       console.error(error);
//       setMessage("Saving data failed");
//     }
//   };

//   // ❌ Cancel Upload
//   const handleCancel = () => {
//     setPreviewData([]);
//     setMessage("Upload cancelled");
//   };

//   return (
//     <div>
//       <h2>Upload Customer Excel</h2>

//       {message && (
//         <div style={{ marginBottom: "10px", color: "#065f46" }}>
//           {message}
//         </div>
//       )}

//       <ExcelUpload onUpload={handleUpload} loading={loading} />

//       {previewData.length > 0 && (
//         <ExcelPreview
//           data={previewData}
//           onConfirm={handleConfirm}
//           onCancel={handleCancel}
//         />
//       )}
//     </div>
//   );
// };

// export default UploadExcel;









import React, { useState } from "react";
import axios from "axios";
import ExcelUpload from "../../components/excel/ExcelUpload";
import ExcelPreview from "../../components/excel/ExcelPreview";

const UploadExcel = () => {
  const [previewData, setPreviewData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpload = async (file) => {
    setLoading(true);
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post(
        "https://credit-server-bea3.onrender.com/api/excel/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setPreviewData(res.data.data);
    } catch (error) {
      console.error(error);
      setMessage("Excel upload failed");
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = async () => {
    try {
      await axios.post(
        "https://credit-server-bea3.onrender.com/api/excel/save",
        previewData
      );

      setMessage("Data saved successfully");
      setPreviewData([]);
    } catch (error) {
      console.error(error);
      setMessage("Saving data failed");
    }
  };

  const handleCancel = () => {
    setPreviewData([]);
    setMessage("Upload cancelled");
  };

  return (
    <div>
      <h2>Upload Customer Excel</h2>

      {message && (
        <div style={{ marginBottom: "10px", color: "#065f46" }}>
          {message}
        </div>
      )}

      <ExcelUpload onUpload={handleUpload} loading={loading} />

      {previewData.length > 0 && (
        <ExcelPreview
          data={previewData}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default UploadExcel;