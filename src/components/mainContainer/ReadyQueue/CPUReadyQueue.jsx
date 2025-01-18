import React, { useContext } from 'react'
import { MyContext } from '../../../context/myContext'

const CPUReadyQueue = () => {

    const { simulation } = useContext(MyContext);
    // console.log("AverageTurnAroundTime:", simulation?.averageTurnaround)

    return (
        <>
            <div className="ready-queue-component">
                <div className="cpu">
                    <h3>CPU</h3>
                    <div className="grid-header">
                        <div className="item-1">Job</div>
                        <div className="item-2">Time</div>
                        <div className="item-3">Idle time</div>
                        <div className="item-4">Utilization</div>
                        <div className="item-5">Average Waiting</div>
                        <div className="item-6">Average Turnaround</div>
                    </div>
                    <div className="grid-body">
                        <div className="item-1">{simulation?.jobText || 'Idle'}</div>
                        <div className="item-2">{simulation?.time || 0}</div>
                        <div className="item-3">{simulation?.idleTime || 0}</div>
                        <div className="item-4">{simulation?.utilization || 0}%</div>
                        <div className="item-5">{simulation?.averageWait || 0}</div>
                        <div className="item-6">{simulation?.averageTurnaround || 0}</div>
                    </div>
                </div>

                <div className="ready-queue">
                    <h3>Ready Queue</h3>
                    <div className="ready-queue-processes">
                        {simulation?.readyQueue.map((job, index) => (
                            <div
                                key={index}
                                className="ready-queue-job"
                                style={{
                                    margin: '5px',
                                    padding: '10px',
                                    backgroundColor: '#2a9d8f',
                                    border: '1px solid #264653',
                                    width: '40px'
                                }}
                            >
                                {`P${job.id}`}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CPUReadyQueue