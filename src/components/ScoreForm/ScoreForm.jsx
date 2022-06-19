import './ScoreForm.css'



export default function ScoreForm({ ratingName, setRatingNumber, reduxState }) {
    
    
    // let inputOne = true;
    // let inputTwo = false;
    // let inputThree = false;
    // let inputFour = false;
    // let inputFive = false;
  
    // switch(reduxState){
    //     case 1:
    //         inputOne = true
    //         break
    //     case 2: 
    //         inputTwo = true
    //         break
    //     case 3:
    //         inputThree = true
    //         break
    //     case 4:
    //         inputFour = true
    //         break
    //     case 5: 
    //         inputFive = true
    //         break
    // }

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
                            // defaultChecked={inputOne}
                        />
                    </div>
                    <div className="radio-buttons">
                        <label htmlFor="2">2</label><br></br>

                        <input 
                            type="radio"
                            id="one"
                            name={ratingName}
                            value="2"
                            // defaultChecked={inputTwo}
                        />
                    </div>
                    <div className="radio-buttons">
                        <label htmlFor="3">3</label><br></br>

                        <input 
                            type="radio"
                            id="one"
                            name={ratingName}
                            value="3"
                            // defaultChecked={inputThree}
                        />
                    </div>
                    <div className="radio-buttons">
                        <label htmlFor="4">4</label><br></br>

                        <input 
                            type="radio"
                            id="one"
                            name={ratingName}
                            value="4"
                            // defaultChecked={inputFour}
                        />
                    </div>
                    <div className="radio-buttons">
                        <label htmlFor="5">5</label><br></br>

                        <input 
                            type="radio"
                            id="one"
                            name={ratingName}
                            value="5"
                            // defaultChecked={inputFive}
                        />
                    </div>
                   
                </form>
        </>
    )
}