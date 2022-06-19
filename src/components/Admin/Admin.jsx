//Importing needed files and
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import AdminListItems from './AdminListItems'
import './Admin.css'


export default function Admin() {
    //React state since the table is list is only used in this component
    const [feedbackList, setFeedbackList] = useState([]);

    //For on page load to grab table from DB
    useEffect(() => {
        fetchFeedbackItems()
    }, [])

    //GET route to grab list from DB then set to React state
    const fetchFeedbackItems = () => {

        axios.get('/feedback')
            .then(res => {
                console.log(res.data)
                setFeedbackList(res.data)
            })
            .catch(err => {
                console.log('Failed to GET', err)
            })
    }

    //Return Render
    return ( 
        <>
            <table className="admin-table">
                <thead>
                    <tr className='table-header-row'>
                        <th>

                        </th>
                        <th>
                            Feeling
                        </th>
                        <th>
                            Comprehension
                        </th>
                        <th>
                            Support
                        </th>
                        <th>
                            Comments
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {feedbackList.map(items => 
                    <AdminListItems 
                        key={items.id} 
                        items={items} 
                        fetch={fetchFeedbackItems} 
                    />
                    )}
                </tbody>
            </table>
        </>
    )
}