import ScoreForm from "../ScoreForm/ScoreForm"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react"
import { useHistory } from "react-router-dom";

export default function Supported() {
    const history = useHistory();
    const dispatch = useDispatch();

    const comments = useSelector(store => store.feedbackComments)
    const [supportedRating, setSupportedRating] = useState(0);
    const supported = 'supportedRating'

    const handleNextButton = () => {
        if(!supportedRating){
            alert('Value is needed to proceed')
            return
        }
        else if(comments === ''){
                 dispatch({
                type: "SET_SUPPORTED_RATING",
                payload: Number(supportedRating)
            })
            history.push('/3')
        }
        else{
            dispatch({
                type: "SET_SUPPORTED_RATING",
                payload: Number(supportedRating)
            })
            history.push('/4')
        }

    }

    return (
        <>
            <div>
                <h3> 3 of 4 Pages</h3>  

                <h4>How well do you being supported?</h4>
                <ScoreForm 
                ratingName={supported}
                setRatingNumber={setSupportedRating}
                />

                <button onClick={handleNextButton}>
                    Next
                </button>
               
            </div> 
        </>
    )
}