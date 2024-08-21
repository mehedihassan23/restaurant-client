import axios from 'axios'

const AxiosSecure = axios.create({
    baseURL: "https://restaurant-server-git-master-mehedi-hassans-projects.vercel.app"
})
const useSecure = () => {
   AxiosSecure.interceptors.request.use( (config) => {
    const token = localStorage.getItem("access-token")   
    if(token){
      config.headers.Authorization = token
    }       
    return config;
   })

  return [AxiosSecure]
}

export default useSecure
