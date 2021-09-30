import {getData, keys} from '@helpers/StorageHelper'
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import {API_URL} from '@env'

export const axiosInstance = axios.create({
  baseURL: API_URL,
})
const ResponseInterceptor = (response: AxiosResponse) => {
  if (response.data.response === 'FAIL') {
    throw new Error(response.data.errorMessage)
  } else {
    return response.data
  }
}
const UserRequestInterceptor = async (config: AxiosRequestConfig) => {
  const res = await getData(keys.authInfo)
  if (res) {
    config.headers['x-auth-token'] = res.token
  }
  return config
}
axiosInstance.interceptors.request.use(UserRequestInterceptor)
// Alter defaults after instance has been created
axiosInstance.interceptors.response.use(ResponseInterceptor, undefined)
