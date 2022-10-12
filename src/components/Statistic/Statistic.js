import React from 'react';

const Statistic = ({statistic}) => {
    return (
        <tr>
            <td> <img src={statistic.logo} alt="" /> </td>
            <td> {statistic.name} </td>
            <td> {statistic.total} </td>
        </tr>
    );
};

export default Statistic;