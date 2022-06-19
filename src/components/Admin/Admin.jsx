import './Admin.css'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import AdminListItems from './AdminListItems'


export default function Admin() {
    const [feedbackList, setFeedbackList] = useState([]);

    useEffect(() => {
        fetchFeedbackItems()
    }, [])

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
                    {feedbackList.map(items => <AdminListItems key={items.id} items={items}/>)}
                </tbody>
            </table>
        </>
    )
}