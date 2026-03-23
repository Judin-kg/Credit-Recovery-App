// import React, { useEffect } from "react";
// import { useCustomers } from "../../context/CustomerContext";
// import CustomerCard from "../../components/customers/CustomerCard";
// import CustomerTable from "../../components/customers/CustomerTable";

// const CustomerList = () => {
//   const { customers, fetchCustomers, loading } = useCustomers();

//   useEffect(() => {
//     fetchCustomers();
//   }, []);

//   console.log(customers,"customersssss");
  

//   if (loading) return <div className="loader">Loading customers...</div>;

//   return (
//     <div>
//       <h2>Customers</h2>

//       {/* Table View */}
//       <CustomerTable customers={customers} />

//       {/* Card View (Optional) */}
//       <div className="mt-2">
  

//         {customers?.map((customer) => (
//           <CustomerCard key={customer._id} customer={customer} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CustomerList;




import React, { useEffect } from "react";
import axios from "axios";
import { useCustomers } from "../../context/CustomerContext";
import CustomerCard from "../../components/customers/CustomerCard";
import CustomerTable from "../../components/customers/CustomerTable";

const CustomerList = () => {
  const { customers = [], fetchCustomers, loading } = useCustomers();

  useEffect(() => {
    fetchCustomers();
  }, []);

  // 👁 View Customer
  const handleView = (customer) => {
    console.log("View customer:", customer);
    // You can open modal here
  };

  // 📲 Send Reminder
  const handleSendReminder = async (customer) => {
    try {
      await axios.post(
        `http://localhost:5000/api/reminders/send/${customer._id}`
      );

      alert("Reminder sent successfully ✅");
    } catch (error) {
      console.error(error);
      alert("Failed to send reminder ❌");
    }
  };

  if (loading) return <div className="loader">Loading customers...</div>;

  return (
    <div>
      <h2>Customers</h2>

      {/* Table View */}
      <CustomerTable
        customers={customers}
        onView={handleView}
        onSendReminder={handleSendReminder}
      />

      {/* Card View */}
      <div className="mt-2">
        {customers.length > 0 &&
          customers.map((customer) => (
            <CustomerCard key={customer._id} 
            onView={handleView}
            onSendReminder={handleSendReminder}
            customer={customer} />
          ))}
      </div>
    </div>
  );
};

export default CustomerList;