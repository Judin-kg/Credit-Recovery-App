import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getAllCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from "../services/customerService";

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load all customers
  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const data = await getAllCustomers();
      setCustomers(data);
    } catch (error) {
      console.error("Error fetching customers", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  // Add customer
  const addCustomer = async (customerData) => {
    const newCustomer = await createCustomer(customerData);
    setCustomers((prev) => [...prev, newCustomer]);
  };

  // Update customer
  const editCustomer = async (id, customerData) => {
    const updated = await updateCustomer(id, customerData);
    setCustomers((prev) =>
      prev.map((cust) => (cust._id === id ? updated : cust))
    );
  };

  // Delete customer
  const removeCustomer = async (id) => {
    await deleteCustomer(id);
    setCustomers((prev) => prev.filter((cust) => cust._id !== id));
  };

  return (
    <CustomerContext.Provider
      value={{
        customers,
        loading,
        fetchCustomers,
        addCustomer,
        editCustomer,
        removeCustomer,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomers = () => {
  return useContext(CustomerContext);
};
