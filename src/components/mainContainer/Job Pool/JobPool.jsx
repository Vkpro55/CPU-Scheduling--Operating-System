import React, { useContext } from 'react';
import { MyContext } from '../../../context/myContext';
import SingleColumn from './SingleColumn';
import SingleRow from './SingleRow';

const JobPool = () => {
    const { jobs } = useContext(MyContext);

    return (
        <div className="job-pool-component">
            <h3>CPU JOBS</h3>
            <div className="jobs-heading">
                {['Sr. No.', 'Arrive', 'Burst', 'Priority', 'Start', 'Finish', 'Remain', 'Turnaround', 'Wait', '%'].map((col, index) => (
                    <SingleColumn key={index} value={col} />
                ))}
            </div>
            <div className="jobs-content">
                {jobs.map((job, index) => (
                    <SingleRow
                        key={index}
                        id={job.id}
                        arrivalTime={job.arrivalTime}
                        burst={job.burst}
                        priority={job.priority}
                        startTime={job.startTime}
                        finishTime={job.finishTime}
                        remaining={job.remaining}
                        turnaround={job.turnaroundTime}
                        wait={job.waitingTime}
                        percent={job.percent}
                    />
                ))}
            </div>
        </div>
    );
};

export default JobPool;
