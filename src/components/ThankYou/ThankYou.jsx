import {useHistory} from 'react-router-dom'


export default function ThankYou() {
    const history = useHistory()

    const OnRestart = () => {
        history.push('/')
    }

    return (
        <>
            <h3>Thank you for the feedback</h3>

            <button onClick={OnRestart}>
                Fill out another form
            </button>
        </>
    )
}