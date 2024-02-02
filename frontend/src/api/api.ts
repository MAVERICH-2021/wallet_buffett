import { API_BASE_URL } from '@/env'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
// Default config for the axios instance


const axiosParams = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'

    // For example, Authorization header: 'Authorization': 'Bearer yourTokenHere'
  },
  baseURL:
    API_BASE_URL
    // process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : '/',
}

// Create axios instance with default params
const axiosInstance = axios.create(axiosParams)

// Main api function
const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axios.get<T>(url, config),
    delete: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axios.get<T>(url, config),
    post: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.post<T>(url, body, config),
    patch: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.post<T>(url, body, config),
    put: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.post<T>(url, body, config),
  }
}

export default api(axiosInstance) //crud methods => json
