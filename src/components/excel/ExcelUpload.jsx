import React, { useState } from "react";
import "./ExcelUpload.css";
import { FaFileExcel, FaUpload } from "react-icons/fa";

const ExcelUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select an Excel file");
      return;
    }
    onUpload(file);
  };

  return (
    <div className="excel-upload-container">
      <h2>
        <FaFileExcel /> Import Customer Excel
      </h2>

      <form onSubmit={handleUpload} className="excel-upload-form">
        <input
          type="file"
          accept=".xlsx,.xls"
          onChange={handleFileChange}
        />
        <button type="submit">
          <FaUpload /> Upload
        </button>
      </form>
    </div>
  );
};

export default ExcelUpload;





// import React, { useState } from "react";
// import "./ExcelUpload.css";
// import { FaFileExcel, FaUpload } from "react-icons/fa";

// const ExcelUpload = ({ onUpload, loading }) => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = (e) => {
//     e.preventDefault();

//     if (!file) {
//       alert("Please select an Excel file");
//       return;
//     }

//     onUpload(file);
//   };

//   return (
//     <div className="excel-upload-container">
//       <h2>
//         <FaFileExcel /> Import Customer Excel
//       </h2>

//       <form onSubmit={handleUpload} className="excel-upload-form">
//         <input
//           type="file"
//           accept=".xlsx,.xls"
//           onChange={handleFileChange}
//         />

//         <button type="submit" disabled={loading}>
//           <FaUpload /> {loading ? "Uploading..." : "Upload"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ExcelUpload;