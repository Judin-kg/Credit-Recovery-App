import React, { useState } from "react";
import "./CustomerForm.css";

const CustomerForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    phone: initialData.phone || "",
    totalCredit: initialData.totalCredit || "",
    paidAmount: initialData.paidAmount || "",
    dueDate: initialData.dueDate || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="customer-form-container">
      <h3>{initialData.name ? "Edit Customer" : "Add New Customer"}</h3>

      <form onSubmit={handleSubmit} className="customer-form">
        <input
          type="text"
          name="name"
          placeholder="Customer Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="WhatsApp Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="totalCredit"
          placeholder="Total Credit Amount"
          value={formData.totalCredit}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="paidAmount"
          placeholder="Paid Amount"
          value={formData.paidAmount}
          onChange={handleChange}
        />

        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {initialData.name ? "Update" : "Save"}
        </button>
      </form>
    </div>
  );
};

export default CustomerForm;
