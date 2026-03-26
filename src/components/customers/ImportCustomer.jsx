import React, { useState } from "react";
import axios from "axios";
import { FaEye, FaWhatsapp } from "react-icons/fa";
import "./ImportCustomer.css";

const ImportCustomer = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    totalCredit: "",
    paid: "",
    balance: "",
    dueDate: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://credit-recovery-app-server.vercel.app/api/customers", form);
      alert("Customer Added Successfully ✅");

      setForm({
        name: "",
        phone: "",
        totalCredit: "",
        paidAmount: "",
        balance: "",
        dueDate: "",
        status: "Pending",
      });
    } catch (error) {
      console.error(error);
      alert("Error adding customer ❌");
    }
  };

  const onView = (c) => {
    alert(`Viewing ${c.name}`);
  };

  const onSendReminder = (c) => {
    const message = `Hi ${c.name}, your pending balance is ₹${c.balance}`;
    window.open(`https://wa.me/91${c.phone}?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="import-container">
      <h2>Import Customer</h2>

      <form onSubmit={handleSubmit} className="import-form">

        <input
          type="text"
          name="name"
          placeholder="Customer Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="totalCredit"
          placeholder="Total Credit"
          value={form.totalCredit}
          onChange={handleChange}
        />

        <input
          type="number"
          name="paidAmount"
          placeholder="Paid Amount"
          value={form.paidAmount}
          onChange={handleChange}
        />

        {/* ✅ Manual Balance Field */}
        <input
          type="number"
          name="balance"
          placeholder="Balance Amount"
          value={form.balance}
          onChange={handleChange}
        />

        <input
          type="date"
          name="dueDate"
          value={form.dueDate}
          onChange={handleChange}
        />

        <select name="status" value={form.status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="Paid">Paid</option>
          <option value="Overdue">Overdue</option>
        </select>

        <button type="submit">Save Customer</button>
      </form>

      {/* Actions Preview */}
      <div className="action-preview">
        <h3>Actions Preview</h3>
        <td className="actions">
          <button onClick={() => onView(form)}>
            <FaEye />
          </button>

          <button
            className="whatsapp-btn"
            onClick={() => onSendReminder(form)}
          >
            <FaWhatsapp />
          </button>
        </td>
      </div>
    </div>
  );
};

export default ImportCustomer;