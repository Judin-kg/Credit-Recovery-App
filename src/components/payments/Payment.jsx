// import React, { useState } from "react";
// import "./PaymentForm.css";

// const PaymentForm = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     amount: "",
//     date: "",
//     mode: "UPI",
//     reference: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//     setFormData({
//       amount: "",
//       date: "",
//       mode: "UPI",
//       reference: "",
//     });
//   };

//   return (
//     <div className="payment-form-container">
//       <h3>Add Payment</h3>

//       <form onSubmit={handleSubmit} className="payment-form">
//         <input
//           type="number"
//           name="amount"
//           placeholder="Amount Paid"
//           value={formData.amount}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           required
//         />

//         <select name="mode" value={formData.mode} onChange={handleChange}>
//           <option value="UPI">UPI</option>
//           <option value="Cash">Cash</option>
//           <option value="Bank Transfer">Bank Transfer</option>
//           <option value="Cheque">Cheque</option>
//         </select>

//         <input
//           type="text"
//           name="reference"
//           placeholder="Reference / Transaction ID"
//           value={formData.reference}
//           onChange={handleChange}
//         />

//         <button type="submit">Save Payment</button>
//       </form>
//     </div>
//   );
// };

// export default PaymentForm;

import React, { useState } from "react";
import axios from "axios";
import "./PaymentForm.css";

const Payment = ({ customer, onClose, onPaymentSuccess }) => {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  if (!customer) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!amount || amount <= 0) {
      alert("Enter valid amount");
      return;
    }

    try {
      setLoading(true);

      await axios.post(
        `https://credit-recovery-app-server.vercel.app/api/customers/payment/${customer._id}`,
        {
          amount: Number(amount),
        }
      );

      alert("Payment recorded successfully ✅");

      setAmount("");
      onPaymentSuccess(); // refresh customers
      onClose(); // close modal
    } catch (error) {
      console.error(error);
      alert("Payment failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="payment-overlay">
      <div className="payment-modal">
        <h2>Record Payment</h2>

        <div className="payment-info">
          <p><strong>Name:</strong> {customer.name}</p>
          <p><strong>Balance:</strong> ₹{customer.balance}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Enter payment amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <div className="payment-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>

            <button type="submit" disabled={loading}>
              {loading ? "Processing..." : "Submit Payment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
