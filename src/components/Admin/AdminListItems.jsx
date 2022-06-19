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


    return (
        <>
            <tr>
                <td>
                    <button
                        className="flag-button"
                    >
                        <FlagIcon />
                    </button>
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