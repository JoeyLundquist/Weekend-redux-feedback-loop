import { useDispatch, useSelector } from "react-redux";
import ScoreForm from "../ScoreForm/ScoreForm"
import { useState } from "react"
import { useHistory } from "react-router-dom";




export default function Understanding() {
    const history = useHistory();
    const dispatch = useDispatch();

    const support = useSelector(store => store.supportedRating)

    const [understandingRating, setUnderstandingRating] = useState(0);
    const understanding = 'understandingRating'

    const handleNextButton = () => {
        
        if(!understandingRating){
            alert('Value is needed to proceed')
            return
        }
        else if(support) {
            dispatch({
                type: "SET_UNDERSTANDING_RATING",
                payload: Number(understandingRating)
            })
            history.push('/4')
        }
        else{
            dispatch({
                type: "SET_UNDERSTANDING_RATING",
                payload: Number(understandingRating)
            })
    
            history.push('/2')
        }
    }

    return (
        <>


            <div>
                <h3> 2 of 4 Pages</h3>  

                <h4>How well are you understanding the content?</h4>
                <ScoreForm 
                ratingName={understanding}
                setRatingNumber={setUnderstandingRating}
                />

                <button onClick={handleNextButton}>
                    Next
                </button>
               
            </div> 
        </>
    )
}