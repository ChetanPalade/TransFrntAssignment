import axios from 'axios';

// API service to fetch checklist data from the backend
export const getChecklistData = async () => {
  try {
    const response = await axios.get('https://tcaserver.onrender.com/api/checklist/evaluate');
    return response.data;
  } catch (error) {
    console.error('Error fetching checklist data', error);
    throw error;
  }
};

