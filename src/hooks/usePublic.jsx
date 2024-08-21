import axios from 'axios'

const AxiosPublic = axios.create({
    baseURL: "https://restaurant-server-git-master-mehedi-hassans-projects.vercel.app"
})

const usePublic = () => {
  return [AxiosPublic];
}

export default usePublic

