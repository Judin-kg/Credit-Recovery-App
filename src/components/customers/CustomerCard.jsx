


import React from "react";
import "./CustomerCard.css";
import { FaUser, FaPhone, FaRupeeSign, FaCalendarAlt } from "react-icons/fa";

const CustomerCard = ({
  customer,
  onSendReminder = () => {},
  onView = () => {},
}) => {
  return (
    <div className="customer-card">
      <div className="card-header">
        <FaUser className="icon" />
        <h3>{customer.name}</h3>
      </div>

      <div className="card-body">
        <p>
          <FaPhone /> {customer.phone}
        </p>
        <p>
          <FaRupeeSign /> Balance: ₹{customer.balance}
        </p>
        <p>
          <FaCalendarAlt /> Due:{" "}
          {new Date(customer.dueDate).toLocaleDateString()}
        </p>
      </div>

      <div className="card-footer">
        <button onClick={() => onView(customer)}>View</button>
        <button
          className="whatsapp"
          onClick={() => onSendReminder(customer)}
        >
          WhatsApp
        </button>
      </div>
    </div>
  );
};

export default CustomerCard;





// import React from "react";
// import "./CustomerCard.css";
// import { FaUser, FaPhone, FaRupeeSign, FaCalendarAlt } from "react-icons/fa";

// const CustomerCard = ({
//   customer,
//   onSendReminder = () => {},
//   onView = () => {},
// }) => {
//   return (
//     <div className="customer-card">
//       <div className="card-header">
//         <FaUser className="icon" />
//         <h3>{customer.name}</h3>
//       </div>

//       <div className="card-body">
//         <p>
//           <FaPhone /> {customer.phone}
//         </p>
//         <p>
//           <FaRupeeSign /> Balance: ₹{customer.balance}
//         </p>
//         <p>
//           <FaCalendarAlt /> Due:{" "}
//           {customer.dueDate
//             ? new Date(customer.dueDate).toLocaleDateString()
//             : "N/A"}
//         </p>
//       </div>

//       <div className="card-footer">
//         <button onClick={() => onView(customer)}>View</button>
//         <button
//           className="whatsapp"
//           onClick={() => onSendReminder(customer)}
//         >
//           WhatsApp
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CustomerCard;