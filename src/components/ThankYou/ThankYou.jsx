//Importing needed tools
import {useHistory} from 'react-router-dom'
import { Button } from '@material-ui/core'

//Exporting component
export default function ThankYou() {
    //Declaring tool
    const history = useHistory()

    //Used to start a new feedback item
    const OnRestart = () => {
        history.push('/')
    }

    //Whats being rendered
    return (
        <>
            <h3>Thank you for the feedback</h3>

            <Button 
                onClick={OnRestart}
                variant="contained"
                color="primary"
            >
                Fill out another form
            </Button>
        </>
    )
}