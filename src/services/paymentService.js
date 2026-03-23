import API from "./api";

// Add payment for a customer
export const addPayment = async (customerId, paymentData) => {
  const response = await API.post(`/payments/${customerId}`, paymentData);
  return response.data;
};

// Get payment history for a customer
export const getPaymentHistory = async (customerId) => {
  const response = await API.get(`/payments/${customerId}`);
  return response.data;
};

// Update payment (if needed)
export const updatePayment = async (paymentId, paymentData) => {
  const response = await API.put(`/payments/update/${paymentId}`, paymentData);
  return response.data;
};

// Delete payment
export const deletePayment = async (paymentId) => {
  const response = await API.delete(`/payments/delete/${paymentId}`);
  return response.data;
};
