import './ScoreForm.css'



export default function ScoreForm({ ratingName, setRatingNumber }) {

    const handleRatingChange = (evt) => {
        setRatingNumber(evt.target.value)
        console.log(evt.target.value)

    }


    return (
        <>
             <form onChange={handleRatingChange}>
                    <div className="radio-buttons">
                        <label htmlFor="1">1</label><br></br>

                        <input 
                            type="radio"
                            id="one"
                            name={ratingName}
                            value="1"
                        />
                    </div>
                    <div className="radio-buttons">
                        <label htmlFor="2">2</label><br></br>

                        <input 
                            type="radio"
                            id="one"
                            name={ratingName}
                            value="2"
                        />
                    </div>
                    <div className="radio-buttons">
                        <label htmlFor="3">3</label><br></br>

                        <input 
                            type="radio"
                            id="one"
                            name={ratingName}
                            value="3"
                        />
                    </div>
                    <div className="radio-buttons">
                        <label htmlFor="4">4</label><br></br>

                        <input 
                            type="radio"
                            id="one"
                            name={ratingName}
                            value="4"
                        />
                    </div>
                    <div className="radio-buttons">
                        <label htmlFor="5">5</label><br></br>

                        <input 
                            type="radio"
                            id="one"
                            name={ratingName}
                            value="5"
                        />
                    </div>
                   
                </form>
        </>
    )
}