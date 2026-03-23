import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCustomerById } from "../../services/customerService";
import PaymentHistory from "../../components/payments/PaymentHistory";
import PaymentForm from "../../components/payments/Payment";
import SendReminderButton from "../../components/messages/SendReminderButton";
import { formatDate } from "../../utils/formatDate";

const CustomerDetails = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const fetchCustomer = async () => {
      const data = await getCustomerById(id);
      setCustomer(data);
    };
    fetchCustomer();
  }, [id]);

  if (!customer) return <div className="loader">Loading customer...</div>;

  return (
    <div className="card">
      <h2>{customer.name}</h2>

      <p><strong>Phone:</strong> {customer.phone}</p>
      <p><strong>Total Credit:</strong> ₹{customer.totalCredit}</p>
      <p><strong>Paid:</strong> ₹{customer.paidAmount}</p>
      <p><strong>Due:</strong> ₹{customer.dueAmount}</p>
      <p><strong>Due Date:</strong> {formatDate(customer.dueDate)}</p>

      <SendReminderButton customerId={customer._id} />

      <h3 className="mt-2">Add Payment</h3>
      <PaymentForm customerId={customer._id} />

      <h3 className="mt-2">Payment History</h3>
      <PaymentHistory customerId={customer._id} />
    </div>
  );
};

export default CustomerDetails;
