import axios from "axios"
import { DeleteForever } from "@mui/icons-material"
import FlagIcon from '@mui/icons-material/Flag';


export default function AdminListItems({items, fetch}) {

    const deleteFeedbackItem = () => {
        const id = items.id
        console.log(id)

        axios.delete(`/feedback/${id}`)
            .then(res => {
                console.log('DELETE success')
                fetch()
            })
            .catch(err => {
                console.log('DELETE FAILED', err)
            })
    }

    const flagFeedbackItem = () => {
        const id = items.id
        let flagged;
        if(items.flagged) {
            flagged = {flagged: false}
        }
        else{
            flagged = {flagged: true}
        }
        console.log(flagged)

        axios.put(`/feedback/${id}`, flagged)
            .then(res => {
                fetch()
                console.log('Flag success')
            })
            .catch(err => {
                console.log('Failed to flag', err)
            })


    }


    return (
        <>
            <tr>
                <td>
                    {
                        items.flagged ?
                        <FlagIcon
                            onClick={flagFeedbackItem}
                            className="flag-button"
                        />
                        :
                        <FlagIcon
                            onClick={flagFeedbackItem}
                        />
                    }
                   
                </td>
                <td>
                    {items.feeling}
                </td>
                <td>
                    {items.understanding}
                </td>
                <td>
                    {items.support}
                </td>
                <td>
                    {items.comments}
                </td>
                <td>
                    <button onClick={deleteFeedbackItem}>
                        <DeleteForever />
                    </button>
                </td>
            </tr>
        </>
    )
}