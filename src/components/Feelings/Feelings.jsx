import { useDispatch } from "react-redux";
import ScoreForm from "../ScoreForm/ScoreForm"
import { useState } from "react"


export default function Feelings() {
    const dispatch = useDispatch();
    const [feelingsRating, setFeelingsRating] = useState(0)
    const feelings = 'feelings-rating'
    
    const handleNextButton = () => {
        dispatch({
            type: "SET_FEELING_RATING",
            payload: feelingsRating
        })
    }

    return (
        <>
            <div>
                <h3> 1 of 4 Pages</h3>  

                <h4>How are you feeling today</h4>
                <ScoreForm 
                ratingName={feelings}
                setRatingNumber={setFeelingsRating}
                />

                <button onClick={handleNextButton}>
                    Next
                </button>
               
            </div>  
        </>
    )

}