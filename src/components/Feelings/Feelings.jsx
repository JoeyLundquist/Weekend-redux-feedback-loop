import { useDispatch } from "react-redux"
import './Feelings.css'
import ScoreForm from "../ScoreForm/ScoreForm"
import { useState } from "react"


export default function Feelings() {
    const [feelingsRating, setFeelingsRating] = useState(null)
    const feelings = 'feelings-rating'
    

    return (
        <>
            <div>
                <h3> 1 of 4 Pages</h3>  

                <h4>How are you feeling today</h4>
                <ScoreForm 
                ratingName={feelings}
                setRatingNumber={setFeelingsRating}
                />
               
            </div>  
        </>
    )

}