//Importing needed tools and file
import { useSelector, useDispatch } from "react-redux"
import { useHistory, Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import axios from "axios"

//Exporting Component
export default function ReviewFeedback() {
    //Declaring tools
    const history = useHistory();
    const dispatch = useDispatch();

    //Setting up needed state from redux store
    const feeling = useSelector(store => store.feelingsRating)
    const understanding = useSelector(store => store.understandingRating)
    const support = useSelector(store => store.supportedRating)
    const comments = useSelector(store => store.feedbackComments)

    //Post route to add new feedback item to DB
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

    //Whats being rendered
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
            // If there is a value that is 0 it will display a disabled button incomplete button 
            // instead of the submit button 
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