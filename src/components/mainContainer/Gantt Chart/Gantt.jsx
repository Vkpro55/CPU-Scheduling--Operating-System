import React, { useContext } from 'react';
import { MyContext } from '../../../context/Mycontext';

const Gantt = () => {

    const { simulation } = useContext(MyContext);

    return (
        <div className="gantt-component">
            <h3 className="gantt-heading">Gantt Chart</h3>
            <div className="gantt-content">
                {simulation?.ganttChart.map((jobId, index) => (
                    <div
                        key={index}
                        className="gantt-job"
                        style={{
                            display: 'inline-block',
                            margin: '2px',
                            padding: '10px',
                            backgroundColor: jobId ? '#f4a261' : '#e76f51',
                            border: '1px solid #264653',
                            width: '40px',
                        }}
                    >
                        {jobId ? `P${jobId}` : 'Idle'}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gantt;