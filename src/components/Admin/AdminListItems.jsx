//Importing needed tools
import axios from "axios"
import { DeleteForever } from "@mui/icons-material"
import FlagIcon from '@mui/icons-material/Flag';

//Importing items from list and function to re-render
export default function AdminListItems({items, fetch}) {

    //Delete route to delete feedback item from DB then re-render
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
    //Put route to do my updates in DB for if the feedback item has been flagged
    const flagFeedbackItem = () => {
        const id = items.id
        let flagged;
        //Checking if the item is flagged and changing the variable being sent to server to update properly
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

    //Whats being rendered
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