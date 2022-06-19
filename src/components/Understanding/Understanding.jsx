//Importing needed tools and file
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react"
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

import ScoreForm from "../ScoreForm/ScoreForm"

//Exporting Component
export default function Understanding() {
    //Declaring tools
    const history = useHistory();
    const dispatch = useDispatch();

    //Setting up local and redux state
    const support = useSelector(store => store.supportedRating)
    const [understandingRating, setUnderstandingRating] = useState(0);
    
    //Setting up the radio button name to be passed into ScoreForm Component
    const understanding = 'understandingRating'

    //Used for input validation
    //Dispatch state to reducer
    //Route to next page
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

    //Whats being rendered
    return (
        <>
            <div className="container-for-feedback">
                <h3> 2 of 4 Pages</h3>  

                <h4>How well are you understanding the content?</h4>
                <ScoreForm 
                    ratingName={understanding}
                    setRatingNumber={setUnderstandingRating}
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