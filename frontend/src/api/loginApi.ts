import { API_BASE_URL } from "@/env";

// Example of using the API_BASE_URL in a fetch call
fetch(`${API_BASE_URL}/your-api-endpoint`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));
