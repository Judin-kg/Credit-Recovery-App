import API from "./api";

// Send WhatsApp reminder to a customer
export const sendReminderMessage = async (customerId) => {
  const response = await API.post(`/messages/send/${customerId}`);
  return response.data;
};

// Get all message logs
export const getMessageLogs = async () => {
  const response = await API.get("/messages/logs");
  return response.data;
};

// Get message logs for a specific customer
export const getCustomerMessageLogs = async (customerId) => {
  const response = await API.get(`/messages/logs/${customerId}`);
  return response.data;
};
