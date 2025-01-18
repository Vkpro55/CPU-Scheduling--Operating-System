
import { createContext, useState, useEffect } from "react";
import { FirstComeFirstServe, ShortestJobFirst, RoundRobin, Priority, PreemptivePriority, STRF } from "../classes/algorithm";
import Job from "../classes/job";
import Simulation from "../classes/simulation";



export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
    const [simSpeed, setSimSpeed] = useState(1000);
    const [quantum, setQuantum] = useState(2);
    const [jobCount, setJobCount] = useState(5);
    const [algo, setAlgo] = useState('fcfs');

    const [jobs, setJobs] = useState([]);
    const [simulation, setSimulation] = useState(null);
    const [running, setRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    /*=== All Buttons state ===*/
    const [clickDataButton, setClickDataButton] = useState(false);


    /*=== 1. On first Render: 8 Jobs with not running state and no interval
          2. When number of jobs change or New Data button is clicked ===*/
    useEffect(() => {
        newSim();
    }, [jobCount, clickDataButton, algo, quantum]);


    const newSim = () => {
        setRunning(false);
        clearInterval(intervalId);

        const newJobs = [];
        for (let i = 0; i < jobCount; i++) {
            newJobs.push(Job.createRandomJob(i + 1));
        }
        setJobs(newJobs);

        const algorithm = getAlgorithm();
        algorithm.quantumTime = quantum;
        setSimulation(new Simulation(algorithm, newJobs));

        setClickDataButton(false);
    };

    const getAlgorithm = () => {
        switch (algo) {
            case 'fcfs':
                console.log(algo);
                return new FirstComeFirstServe();
            case 'Shortest Job First':
                console.log(algo);
                return new ShortestJobFirst();
            case 'Round Robin':
                console.log(algo);
                return new RoundRobin();
            case 'Priority':
                console.log(algo);
                return new Priority();
            case 'Preemptive Priority':
                console.log(algo);
                return new PreemptivePriority();
            case 'Shortest Time remaining':
                console.log(algo);
                return new STRF();
            default:
                return new FirstComeFirstServe();
        }
    };

    const play = () => {
        if (!simulation) return;

        if (simulation.isFinished()) {
            simulation.reset();
        }

        setRunning(true);
        const intervalId = setInterval(() => {
            if (simulation && !simulation.isFinished()) {
                const updatedJobs = simulation.nextStep();
                setJobs(updatedJobs);
            } else {
                clearInterval(intervalId);
                setRunning(false);
            }
        }, simSpeed);

        setIntervalId(intervalId);
    };

    const reset = () => {
        if (!simulation) return;

        setRunning(false);
        clearInterval(intervalId);
        simulation.reset();

        setJobs(simulation.jobs.map(job => job.clone()));
    }


    return (
        <MyContext.Provider
            value={{
                simSpeed, setSimSpeed,
                quantum, setQuantum,
                jobCount, setJobCount,
                algo, setAlgo,
                jobs, setJobs,
                simulation, setSimulation,
                running, setRunning,
                intervalId, setIntervalId,
                clickDataButton, setClickDataButton,
                play,
                reset
            }}>
            {children}
        </MyContext.Provider >
    );
};
