import { useQuery } from '@tanstack/react-query'
import useSecure from "../hooks/useSecure"

const useUser = () => {
    const [AxiosSecure] = useSecure()
    const {data: alluser = [], isPending: isUserLoading, refetch} = useQuery({
         queryKey: ["alluser"],
         queryFn: async () => {
            const userresult = await  AxiosSecure.get("/user")
            return userresult.data
         }
    })

  return  [alluser, isUserLoading, refetch]
}

export default useUser
