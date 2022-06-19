//Importing needed tools and file
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react"
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

import ScoreForm from "../ScoreForm/ScoreForm"


//Exported component
export default function Feelings() {
    //Declaring tools
    const history = useHistory();
    const dispatch = useDispatch();

    //Setting up store and local state
    const understanding = useSelector(store => store.understandingRating)
    const [feelingsRating, setFeelingsRating] = useState(0)
    //Setting up radio button names to be passed down to ScoreForm component
    const feelings = 'feelings-rating'
    
    //This is to validate inputs are there, 
    //then dispatches state to reducer, 
    //then move you to next page
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

    //Whats being rendered
    return (
        <>
            <div className="container-for-feedback">
                <h3> 1 of 4 Pages</h3>  

                <h4>How are you feeling today?</h4>
                <ScoreForm 
                    ratingName={feelings}
                    setRatingNumber={setFeelingsRating}
                />
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