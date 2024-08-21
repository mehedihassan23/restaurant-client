import {useQuery} from '@tanstack/react-query'
import useSecure from './useSecure'
import { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'

const useCart = () => {
    const [AxiosSecure] = useSecure()
    const {user} = useContext(AuthContext)

    const {data: mycart=[], isLoading: isCartLoading, refetch} = useQuery({
        queryKey: ["mycart", user?.email],
        queryFn: async ()=> {
            const result = await AxiosSecure.get(`/cart/${user?.email}`)
            return result.data;
        }
    })
   return [mycart, isCartLoading, refetch]
}

export default useCart
