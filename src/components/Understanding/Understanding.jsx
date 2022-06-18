import { useDispatch } from "react-redux";
import ScoreForm from "../ScoreForm/ScoreForm"
import { useState } from "react"



export default function Understanding() {
    const dispatch = useDispatch();
    const [understandingRating, setUnderstandingRating] = useState(0);
    const understanding = 'understandingRating'

    const handleNextButton = () => {
        dispatch({
            type: "SET_UNDERSTANDING_RATING",
            payload: Number(understandingRating)
        })
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