import axios from 'axios'
 
// Create an instance of Axios with default configurations
const axiosClient = axios.create({
  baseURL: 'http://127.0.0.1:3000', // Set your base URL here
  timeout: 5000, // Set request timeout (milliseconds)
  headers: {
    'Content-Type': 'application/json', // Set default Content-Type
    // Add any other default headers if needed
  },
});
 
// You can also add request interceptors to modify requests before they are sent
axiosClient.interceptors.request.use(
  (config) => {
    console.log(config)
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);
 
// You can also add response interceptors to modify responses before they are handled
axiosClient.interceptors.response.use(
  (response) => {
    // You can modify response data or do any other transformations
    return response;
  },
  (error) => {
    // Handle response errors
    return Promise.reject(error);
  }
);

export default axiosClient;