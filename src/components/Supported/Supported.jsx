import ScoreForm from "../ScoreForm/ScoreForm"
import { useDispatch } from "react-redux";
import { useState } from "react"

export default function Supported() {
    const dispatch = useDispatch();
    const [supportedRating, setSupportedRating] = useState(0);
    const supported = 'supportedRating'

    const handleNextButton = () => {
        dispatch({
            type: "SET_SUPPORTED_RATING",
            payload: Number(supportedRating)
        })
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