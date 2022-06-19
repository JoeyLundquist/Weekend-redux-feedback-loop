//Importing needed file
import './ScoreForm.css'


//Exporting Component, made to be used in the other components needing a 1 - 5 radio input for scores
export default function ScoreForm({ ratingName, setRatingNumber }) {
    //Used to set rating number
    const handleRatingChange = (evt) => {
        setRatingNumber(evt.target.value)
        console.log(evt.target.value)

    }

    //Whats being rendered
    return (
        <>
            <form onChange={handleRatingChange}>
                <div className="radio-buttons">
                    <label htmlFor="1">1</label><br></br>

                    <input 
                        type="radio"
                        name={ratingName}
                        value="1"
                    />
                </div>

                <div className="radio-buttons">
                    <label htmlFor="2">2</label><br></br>

                    <input 
                        type="radio"
                        name={ratingName}
                        value="2"
                    />
                </div>

                <div className="radio-buttons">
                    <label htmlFor="3">3</label><br></br>

                    <input 
                        type="radio"
                        name={ratingName}
                        value="3"
                    />
                </div>

                <div className="radio-buttons">
                    <label htmlFor="4">4</label><br></br>

                    <input 
                        type="radio"
                        name={ratingName}
                        value="4"
                    />
                </div>

                <div className="radio-buttons">
                    <label htmlFor="5">5</label><br></br>

                    <input 
                        type="radio"
                        name={ratingName}
                        value="5"
                    />
                </div>
                
            </form>
        </>
    )
}