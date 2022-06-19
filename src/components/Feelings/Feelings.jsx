import { useDispatch, useSelector } from "react-redux";
import ScoreForm from "../ScoreForm/ScoreForm"
import { useState } from "react"
import { useHistory } from "react-router-dom";



export default function Feelings() {
    const understanding = useSelector(store => store.understandingRating)
    const history = useHistory();
    const dispatch = useDispatch();
    const [feelingsRating, setFeelingsRating] = useState(0)
    const feelings = 'feelings-rating'
    
    const handleNextButton = () => {


    

        if(!feelingsRating){
            alert('Value is needed to proceed')
            return
        }
        else if(understanding) {
            dispatch({
                type: "SET_FEELING_RATING",
                payload: Number(feelingsRating)
            })
            history.push('/4')
        }
        else{
            dispatch({
                type: "SET_FEELING_RATING",
                payload: Number(feelingsRating)
            })
            history.push('/1')
        }
        
    
    }

    return (
        <>
            <div>
                <h3> 1 of 4 Pages</h3>  

                <h4>How are you feeling today?</h4>
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