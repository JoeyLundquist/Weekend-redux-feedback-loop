import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

export default function ReviewFeedback() {
    const dispatch = useDispatch();

    const feeling = useSelector(store => store.feelingsRating)
    const understanding = useSelector(store => store.understandingRating)
    const support = useSelector(store => store.supportedRating)
    const comments = useSelector(store => store.feedbackComments)

    const onSubmit = () => {



        axios.post('/feedback', {feeling, understanding, support, comments})
            .then((res) => {
                console.log('Success', res)
                dispatch({
                    type: 'SUBMITTED_CLEAR_STATE',
                })
            })
            .catch((err) => {
                console.log('Error POSTING', err)
            })
    }

    return (
        <>
            <h2>Review your Feedback</h2>
            <p>Feelings: {feeling}</p>
            <p>Understanding: {understanding}</p>
            <p>Supported: {support}</p>
            <p>Comments: {comments}</p>

            <button onClick={onSubmit}>
                Submit
            </button>
        </>
    )
}