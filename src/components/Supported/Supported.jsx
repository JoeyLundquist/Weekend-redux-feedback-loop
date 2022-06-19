//Importing needed tools and file
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react"
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

import ScoreForm from "../ScoreForm/ScoreForm"

//Exporting my component
export default function Supported() {
    //Declaring tools
    const history = useHistory();
    const dispatch = useDispatch();

    //Setting up local and redux state 
    const comments = useSelector(store => store.feedbackComments)
    const [supportedRating, setSupportedRating] = useState(0);
    
    //Declaring radio button name to be passed down to ScoreForm Component
    const supported = 'supportedRating'

    //Used for input validation
    //Then dispatch state to reducer
    //Then routes to next needed page
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

    //Whats being rendered
    return (
        <>
            <div className="container-for-feedback">
                <h3> 3 of 4 Pages</h3>  

                <h4>How well do you being supported?</h4>
                <ScoreForm 
                    ratingName={supported}
                    setRatingNumber={setSupportedRating}
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