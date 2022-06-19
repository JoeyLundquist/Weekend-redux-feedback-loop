import { useDispatch, useSelector } from "react-redux";
import ScoreForm from "../ScoreForm/ScoreForm"
import { useState } from "react"
import { useHistory } from "react-router-dom";



export default function Feelings() {
    const feeling = useSelector(store => store.feelingsRating)
    const history = useHistory();
    const dispatch = useDispatch();
    const [feelingsRating, setFeelingsRating] = useState(0)
    const feelings = 'feelings-rating'
    
    const handleNextButton = () => {
        console.log('Feelings rating?', feeling)


    

        if(!feelingsRating){
            alert('Value is needed to proceed')
            return
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

                <h4>How are you feeling today</h4>
                <ScoreForm 
                ratingName={feelings}
                setRatingNumber={setFeelingsRating}
                reduxState={feeling}
                />

                <button onClick={handleNextButton}>
                    Next
                </button>
               
            </div>  
        </>
    )

}