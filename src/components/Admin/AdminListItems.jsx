


export default function AdminListItems({items}) {

    return (
        <>
            <tr>
                <td>
                    <button>
                        f
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
                    <button>
                        Delete
                    </button>
                </td>
            </tr>
        </>
    )
}