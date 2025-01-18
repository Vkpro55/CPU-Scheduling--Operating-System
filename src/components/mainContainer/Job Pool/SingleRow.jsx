import React from 'react'
import SingleCol from './SingleCol';

const SingleRow = ({ id, arrivalTime, burst, priority, startTime, finishTime, remaining, turnaround = 0, wait = 0, percent = 0 }) => {
    const arr = [id, arrivalTime, burst, priority, startTime, finishTime, remaining, turnaround, wait, percent];
    return (
        <>
            <div className="single-row">
                {
                    arr.map((value, index) => {
                        return <SingleCol key={index} value={value} />
                    })
                }
            </div>
        </>
    )
}

export default SingleRow