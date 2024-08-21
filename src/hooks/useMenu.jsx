
import { useQuery } from '@tanstack/react-query'
import usePublic from './usePublic'

const useMenu = () => {
    const [AxiosPublic] = usePublic()

    const {data: menu = [], isPending: isMenuLoading, refetch} = useQuery({ 
        queryKey: ['menu'], 
        queryFn: async () => {
            const result = await AxiosPublic.get("/menu")
            return result.data;
        }   
    })

  return [menu, isMenuLoading, refetch];
}

export default useMenu
