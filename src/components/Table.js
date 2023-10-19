import React from 'react'

export default function Table(props) {

    return (
        <div className="tabcontent">
            <table className='table-wrapper'>
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Year
                        </th>
                        <th>
                            Medals
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.data && props.data.map((val, ind) => {
                        return (
                            <tr>
                                <td>
                                    {
                                        ind + 1
                                    }
                                </td>
                                <td>
                                    {val.Year}
                                </td>
                                <td>
                                    {val.Medals}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
