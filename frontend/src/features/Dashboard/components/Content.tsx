import React from 'react';
import './Dashboard.css'

import Chart from './Chart.tsx';
import Table from './Table.tsx';

function Content() {
    return (
        <div className='contain-content'>
            <Chart />
            <Table />
        </div>
    )
}

export default Content;