
import usePublic from './usePublic'
import { useQuery } from '@tanstack/react-query'

const useReview = () => {
    const [AxiosPublic] = usePublic()
    const {data: review=[], isPending: isReviewLoading} = useQuery({
        queryKey: ["review"],
        queryFn: async () => {
            const review = await AxiosPublic.get("/reviews")
            return review.data;
        }
    })
   return [review, isReviewLoading]
}

export default useReview
