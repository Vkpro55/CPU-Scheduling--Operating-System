import React, { useContext } from 'react'
import SelectHeader from './SelectHeader';
import { MyContext } from '../../../context api/myContext';


const CPUoptions = () => {
    const numberOfJobs = [1, 2, 3, 4, 5, 6, 7];
    const algorithms = ['First Come First Serve', 'Shortest Job First', 'Round Robin', 'Priority', 'Preemptive Priority', 'Shortest Time remaining'];
    const quantum = [2, 3, 4, 5, 6, 7];
    const speeds = ['Very fast', 'Fast', 'Normal', 'Slow', 'Very Slow'];

    /*=== Manage States ===*/
    const { setJobCount, setAlgo, setQuantum } = useContext(MyContext);

    return (
        <>
            <div className="header-cpu-options">
                <div className="grid-header">
                    <div className="item-1">Number of jobs</div>
                    <div className="item-2">Choose Algorithm</div>
                    <div className="item-3">Quantum</div>
                </div>
                <div className="grid-body">
                    <div className="item-1">
                        <SelectHeader name="numJob" id="numJob" options={numberOfJobs} onChangeFun={setJobCount} />
                    </div>
                    <div className="item-2">
                        <SelectHeader name="algorithms" id="algorithms" options={algorithms} onChangeFun={setAlgo} />
                    </div>
                    <div className="item-3">
                        <SelectHeader name="quantum" id="quantum" options={quantum} onChangeFun={setQuantum} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CPUoptions