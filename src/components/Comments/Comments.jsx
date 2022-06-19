import { useDispatch } from "react-redux";
import { useState } from "react"
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";



export default function Comments() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [feedbackComments, setFeedbackComments] = useState('');


    const handleNextButton = (e) => {
        e.preventDefault();
        dispatch({
            type: "SET_COMMENTS_FOR_FEEDBACK",
            payload: feedbackComments
        })
        history.push('/4')
    }

    return (
        <>

            <div className="container-for-feedback">
                <h3> 4 of 4 Pages</h3>  
                <h4>Any comments you want to leave?</h4>
                <form onSubmit={(e) => handleNextButton(e)}>
                    <input 
                        type="text" 
                        placeholder="Comments go here"
                        onChange={e => setFeedbackComments(e.target.value)}
                        value={feedbackComments}
                    />
                    <br></br>
                </form>
            </div> 
                    <Button 
                        className="next-button"
                        onClick={handleNextButton}
                        variant="contained"
                        color="primary"
                    >
                        Next
                    </Button>
        </>
    )
}