import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { useHistory, Link } from "react-router-dom";

export default function ReviewFeedback() {
    const history = useHistory();
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
                history.push('/thankyou')
            })
            .catch((err) => {
                console.log('Error POSTING', err)
            })
    }

    return (
        <>
            <h2>Review your Feedback</h2>
            
            <p><Link to="/">Feelings:</Link> {feeling}</p>
            <p><Link to="/1">Understanding: </Link>{understanding}</p>
            <p><Link to="/2">Supported:</Link> {support}</p>
            <p><Link to="/3">Comments:</Link> {comments}</p>

            <button onClick={onSubmit}>
                Submit
            </button>
        </>
    )
}