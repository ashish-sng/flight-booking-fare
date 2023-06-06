import axios from 'axios';
import { SERVER_URL } from '../constant';

export const searchFlightsApi = async (source, destination, formattedDate) =>
  axios.get(
    `${SERVER_URL}/flights?source=${source}&destination=${destination}&departureDate=${formattedDate}`,
    {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }
  );