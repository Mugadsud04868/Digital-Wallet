import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust the base URL as needed
  timeout: 10000, // Set a timeout for requests
});

// Example API call to get user data
export const getUserData = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Example API call to create a transaction
export const createTransaction = async (transactionData) => {
  try {
    const response = await api.post('/transactions', transactionData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Example API call to get transaction history
export const getTransactionHistory = async (userId) => {
  try {
    const response = await api.get(`/transactions/history/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};