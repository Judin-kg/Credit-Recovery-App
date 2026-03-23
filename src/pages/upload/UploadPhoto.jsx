




// import React, { useState, useRef } from "react";
// import axios from "axios";

// const UploadPhoto = () => {
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [cameraOpen, setCameraOpen] = useState(false);
//   const [customers, setCustomers] = useState([]);

//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);

//   // 📷 Open Camera
//   const openCamera = async () => {
//     try {
//       setCameraOpen(true);

//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: { facingMode: "environment" },
//       });

//       videoRef.current.srcObject = stream;
//     } catch (error) {
//       alert("Camera access denied");
//     }
//   };

//   // 📸 Capture Photo
//   const capturePhoto = () => {
//     const video = videoRef.current;
//     const canvas = canvasRef.current;

//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;

//     const ctx = canvas.getContext("2d");
//     ctx.drawImage(video, 0, 0);

//     canvas.toBlob((blob) => {
//       setImage(blob);
//       setPreview(URL.createObjectURL(blob));
//     }, "image/jpeg");

//     // Stop camera
//     video.srcObject.getTracks().forEach((track) => track.stop());
//     setCameraOpen(false);
//   };

//   // 📤 Upload Image
//   const handleUpload = async () => {
//     if (!image) {
//       alert("Please select or capture image");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", image, "captured.jpg");

//     try {
//       setLoading(true);

//       const res = await axios.post(
//         "http://localhost:5000/api/photo/upload-photo",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       console.log("Response:", res.data);

//       alert("Data Imported Successfully");

//       // backend returns data
//       setCustomers(res.data.data || []);

//     } catch (err) {
//       console.error(err);

//       alert(
//         err?.response?.data?.message ||
//         "Upload failed"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Upload Excel Photo</h2>

//       {/* Upload File */}
//       <input
//         type="file"
//         accept="image/*"
//         onChange={(e) => {
//           const file = e.target.files[0];
//           if (!file) return;

//           setImage(file);
//           setPreview(URL.createObjectURL(file));
//         }}
//       />

//       <br />
//       <br />

//       <button onClick={openCamera}>📷 Take Photo</button>

//       <br />
//       <br />

//       {/* Camera */}
//       {cameraOpen && (
//         <div>
//           <video ref={videoRef} autoPlay width="300" />

//           <br />

//           <button onClick={capturePhoto}>
//             Capture Photo
//           </button>
//         </div>
//       )}

//       <canvas ref={canvasRef} style={{ display: "none" }} />

//       {/* Preview */}
//       {preview && (
//         <div>
//           <h4>Preview</h4>
//           <img src={preview} alt="preview" width="300" />
//         </div>
//       )}

//       <br />

//       <button onClick={handleUpload} disabled={loading}>
//         {loading ? "Processing..." : "Upload & Import"}
//       </button>

//       {/* Table */}
//       {customers.length > 0 && (
//         <div style={{ marginTop: "30px" }}>
//           <h3>Extracted Customers</h3>

//           <table border="1" cellPadding="10">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Phone</th>
//                 <th>Total Credit</th>
//                 <th>Paid</th>
//                 <th>Balance</th>
//                 <th>Due Date</th>
//                 <th>Status</th>
//               </tr>
//             </thead>

//             <tbody>
//               {customers.map((c, index) => (
//                 <tr key={index}>
//                   <td>{c.name}</td>
//                   <td>{c.phone}</td>
//                   <td>₹{c.totalCredit}</td>
//                   <td>₹{c.paid}</td>
//                   <td>₹{c.balance}</td>

//                   <td>
//                     {c.dueDate
//                       ? new Date(c.dueDate).toLocaleDateString()
//                       : "-"}
//                   </td>

//                   <td>{c.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UploadPhoto;







// import React, { useState, useRef } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const UploadPhoto = () => {
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [cameraOpen, setCameraOpen] = useState(false);

//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);

//   const navigate = useNavigate();

//   // 📷 Camera
//   const openCamera = async () => {
//     const stream = await navigator.mediaDevices.getUserMedia({
//       video: { facingMode: "environment" },
//     });

//     setCameraOpen(true);
//     videoRef.current.srcObject = stream;
//   };

//   const capturePhoto = () => {
//     const video = videoRef.current;
//     const canvas = canvasRef.current;

//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;

//     const ctx = canvas.getContext("2d");
//     ctx.drawImage(video, 0, 0);

//     canvas.toBlob((blob) => {
//       setImage(blob);
//       setPreview(URL.createObjectURL(blob));
//     }, "image/jpeg");

//     video.srcObject.getTracks().forEach((t) => t.stop());
//     setCameraOpen(false);
//   };

//   // 📤 Upload → Navigate
//   const handleUpload = async () => {
//     if (!image) return alert("Select image");

//     const formData = new FormData();
//     formData.append("image", image);

//     try {
//       setLoading(true);

//       const res = await axios.post(
//         "http://localhost:5000/api/photo/upload-photo",
//         formData
//       );

//       // 👉 Navigate to preview page
//       navigate("/upload-photo/preview", {
//         // state: {
//         //   customers: res.data.data,
//         //   rawText: res.data.rawText,
//         //   imagePreview: preview
//         // }
//           state: {
//     customers: res.data.data.customers,  // 🔥 FIX
//     rawText: res.data.data.rawText,
//     imagePreview: preview
//   }
//       });

//     } catch {
//       alert("Upload failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Upload Photo</h2>

//       <input
//         type="file"
//         accept="image/*"
//         onChange={(e) => {
//           const file = e.target.files[0];
//           setImage(file);
//           setPreview(URL.createObjectURL(file));
//         }}
//       />

//       <br /><br />

//       <button onClick={openCamera}>📷 Camera</button>

//       {cameraOpen && (
//         <div>
//           <video ref={videoRef} autoPlay width="300" />
//           <br />
//           <button onClick={capturePhoto}>Capture</button>
//         </div>
//       )}

//       <canvas ref={canvasRef} style={{ display: "none" }} />

//       {preview && (
//         <div>
//           <h4>Preview</h4>
//           <img src={preview} width="300" alt="preview" />
//         </div>
//       )}

//       <br />

//       <button onClick={handleUpload}>
//         {loading ? "Processing..." : "Next → Preview"}
//       </button>
//     </div>
//   );
// };

// export default UploadPhoto;




import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UploadPhoto = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [stream, setStream] = useState(null);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const navigate = useNavigate();

  // 📷 Open Camera
  const openCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });

      setStream(mediaStream);
      setCameraOpen(true);
    } catch (err) {
      console.error("Camera error:", err);
      alert("Camera access denied");
    }
  };

  // 🎥 Attach stream AFTER video renders
  useEffect(() => {
    if (cameraOpen && videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [cameraOpen, stream]);

  // 📸 Capture Photo
  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);

    canvas.toBlob((blob) => {
      setImage(blob);
      setPreview(URL.createObjectURL(blob));
    }, "image/jpeg");

    // stop camera
    if (stream) {
      stream.getTracks().forEach((t) => t.stop());
    }

    setCameraOpen(false);
  };

  // 📁 File Upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // 📤 Upload & Navigate
  const handleUpload = async () => {
    if (!image) return alert("Select image");

    const formData = new FormData();
    formData.append("image", image);

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/photo/upload-photo",
        formData
      );

      navigate("/upload-photo/preview", {
        state: {
          customers: res.data.data?.customers || [],
          rawText: res.data.data?.rawText || "",
          imagePreview: preview,
        },
      });
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Upload Photo</h2>

      {/* 📁 File Input */}
      <input type="file" accept="image/*" onChange={handleFileChange} />

      <br /><br />

      {/* 📷 Camera Button */}
      <button  style={{marginBottom:"40px"}} onClick={openCamera}>📷 Open Camera</button>

      {/* 🎥 Camera View */}
      {cameraOpen && (
        <div style={{ marginTop: 20 }}>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            width="300"
            style={{ border: "1px solid #ccc" }}
          />
          <br />
          <button onClick={capturePhoto}>Capture</button>
        </div>
      )}

      {/* 🧾 Hidden Canvas */}
      <canvas ref={canvasRef} style={{ display: "none" }} />

      {/* 🖼️ Preview */}
      {preview && (
        <div style={{ marginTop: 20 }}>
          <h4>Preview</h4>
          <img src={preview} width="300" alt="preview" />
        </div>
      )}

      <br />

      {/* 🚀 Upload Button */}
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Processing..." : "Next → Preview"}
      </button>
    </div>
  );
};

export default UploadPhoto;