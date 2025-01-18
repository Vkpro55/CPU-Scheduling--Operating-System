import React from 'react'
import Header from './Header/Header'
import CPUReadyQueue from './ReadyQueue/CPUReadyQueue'
import Gantt from './Gantt Chart/Gantt'
import JobPool from './Job Pool/JobPool'
import { MyContextProvider } from '../../context api/myContext'


const MainContainer = () => {
    return (
        <>
            <MyContextProvider>
                <div className="cpu-sched-content">
                    <Header />
                    <CPUReadyQueue />
                    <Gantt />
                    <JobPool />
                </div>
            </MyContextProvider>
        </>
    )
}

export default MainContainer