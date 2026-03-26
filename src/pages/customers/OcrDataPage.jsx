// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import OcrDataTable from "../../components/ocr/OcrDataTable";

// const OcrDataPage = () => {
//   const [ocrData, setOcrData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchOcrData = async () => {
//     try {
//       setLoading(true);

//       const res = await axios.get(
//         "http://localhost:5000/api/photo/ocr-data"
//       );

//       setOcrData(res.data.data || []);
//     } catch (error) {
//       console.error("Fetch OCR Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchOcrData();
//   }, []);

//   const handleView = (item) => {
//     console.log("OCR DATA:", item);

//     alert(item.rawText);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>OCR Data</h1>

//       {loading ? (
//         <p>Loading OCR records...</p>
//       ) : (
//         <OcrDataTable ocrData={ocrData} onView={handleView} />
//       )}
//     </div>
//   );
// };

// export default OcrDataPage;



import React, { useEffect, useState } from "react";
import axios from "axios";

const OcrDataTable = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchOcrData = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "https://credit-recovery-app-server.vercel.app/api/photo/ocr-data"
      );

      const records = res.data.data || [];

      // extract only customers
      const allCustomers = records.flatMap(
        (item) => item.customers || []
      );

      setCustomers(allCustomers);

    } catch (error) {
      console.error("Fetch OCR Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOcrData();
  }, []);

  if (loading) {
    return <p>Loading customers...</p>;
  }

  if (customers.length === 0) {
    return <p>No customers found</p>;
  }

  return (
    <table border="1" cellPadding="10" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Total Credit</th>
          <th>Balance</th>
          <th>Status</th>
          <th>Due Date</th>
        </tr>
      </thead>

      <tbody>
        {customers.map((c) => (
          <tr key={c._id}>
            <td>{c.name.replace(/^\d+\s*/, "")}</td>
            <td>{c.totalCredit}</td>
            <td>{c.balance}</td>
            <td>{c.status}</td>
            <td>
              {c.dueDate
                ? new Date(c.dueDate).toLocaleDateString()
                : "-"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OcrDataTable;