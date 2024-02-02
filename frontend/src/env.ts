let API_HOST;
let API_PORT;

if (process.env.NODE_ENV === 'production') {
//   API_HOST = 'https://your-production-api-host.com';
API_HOST = 'http://localhost';

//   API_PORT = '443'; // Standard port for HTTPS
API_PORT = '8888'; 

} else {
  // API_HOST = 'http://localhost';
  API_HOST = 'https://localhost';
  API_PORT = '8888'; // Or any other port for local development
}

export const API_BASE_URL = `${API_HOST}:${API_PORT}`;