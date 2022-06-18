import { useSelector } from "react-redux"

export default function ReviewFeedback() {
    const feelings = useSelector(store => store.feelingsRating)
    const understanding = useSelector(store => store.understandingRating)
    const supported = useSelector(store => store.supportedRating)
    const comments = useSelector(store => store.feedbackComments)

    const onSubmit = () => {
        
    }

    return (
        <>
            <h2>Review your Feedback</h2>
            <p>Feelings: {feelings}</p>
            <p>Understanding: {understanding}</p>
            <p>Supported: {supported}</p>
            <p>Comments: {comments}</p>

            <button>
                Submit
            </button>
        </>
    )
}