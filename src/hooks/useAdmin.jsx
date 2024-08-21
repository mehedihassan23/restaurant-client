import { useQuery } from '@tanstack/react-query'
import usePublic from './usePublic'
import { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'

const useAdmin = () => {
    const {user} = useContext(AuthContext)
    const [AxiosPublic] = usePublic()

    const {data: Admin, isLoading: dataloading} = useQuery({
       queryKey: ["admin", user?.email],
       queryFn: async () => {
           const adminresult = await AxiosPublic.get(`/admin/${user?.email}`)
           return adminresult.data
       }
    })
  return [Admin, dataloading]
 
}

export default useAdmin
