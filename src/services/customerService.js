import API from "./api";

// Get all customers
export const getAllCustomers = async () => {
  const response = await API.get("/customers");
  return response.data.data;
};

// Get single customer by ID
export const getCustomerById = async (id) => {
  const response = await API.get(`/customers/${id}`);
  return response.data;
};

// Create new customer
export const createCustomer = async (customerData) => {
  const response = await API.post("/customers", customerData);
  return response.data;
};

// Update customer
export const updateCustomer = async (id, customerData) => {
  const response = await API.put(`/customers/${id}`, customerData);
  return response.data;
};

// Delete customer
export const deleteCustomer = async (id) => {
  const response = await API.delete(`/customers/${id}`);
  return response.data;
};

// Send WhatsApp reminder to a customer
export const sendCustomerReminder = async (id) => {
  const response = await API.post(`/messages/send/${id}`);
  return response.data;
};
