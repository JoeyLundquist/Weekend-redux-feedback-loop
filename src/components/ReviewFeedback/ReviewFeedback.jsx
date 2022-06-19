import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { useHistory, Link } from "react-router-dom";
import { Button } from "@material-ui/core";

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
            <div className="container-for-feedback">
                <h2>Review your Feedback</h2>
                
                <p><Link to="/">Feelings:</Link> {feeling}</p>
                <p><Link to="/1">Understanding: </Link>{understanding}</p>
                <p><Link to="/2">Supported:</Link> {support}</p>
                <p><Link to="/3">Comments:</Link> {comments}</p>

            </div>
           {
                !feeling || !understanding || !support ?
                <Button
                    id="incomplete-button"
                    disabled
                    variant="outlined"
                >
                    Incomplete
                </Button>
                : 
                <Button 
                    className="next-button"
                    onClick={onSubmit}
                    variant="contained"
                    color="primary"
                >
                Submit
                </Button>
            } 
       
        </>
    )
}