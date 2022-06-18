import { useSelector } from "react-redux"

export default function ReviewFeedback() {
    const feeling = useSelector(store => store.feelingsRating)
    const understanding = useSelector(store => store.understandingRating)
    const support = useSelector(store => store.supportedRating)
    const comments = useSelector(store => store.feedbackComments)

    const onSubmit = () => {

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