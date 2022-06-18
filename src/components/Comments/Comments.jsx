import { useDispatch } from "react-redux";
import ScoreForm from "../ScoreForm/ScoreForm"
import { useState } from "react"



export default function Comments() {
    const dispatch = useDispatch();
    const [feedbackComments, setFeedbackComments] = useState('');


    const handleNextButton = (e) => {
        e.preventDefault();
        dispatch({
            type: "SET_COMMENTS_FOR_FEEDBACK",
            payload: feedbackComments
        })
    }

    return (
        <>


            <div>
                <h3> 4 of 4 Pages</h3>  

                <h4>Any comments you want to leave?</h4>
                <form>
                <input 
                    type="text" 
                    placeholder="Comments go here"
                    onChange={e => setFeedbackComments(e.target.value)}
                    value={feedbackComments}
                />
                <br></br>

                <button onClick={handleNextButton}>
                    Next
                </button>
                </form>
               
            </div> 
        </>
    )
}