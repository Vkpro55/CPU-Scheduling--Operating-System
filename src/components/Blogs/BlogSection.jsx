import React from 'react';
import Blog from './Blog';

const BlogSection = () => {
    const allAlgo = [
        "First Come First Serve",
        "Shortest Job First",
        "Round Robin",
        "Priority Scheduling",
        "Preemptive Priority Scheduling",
        "Shortest Time Remaining"
    ];

    const content = [
        "Jobs are executed in the order they arrive, like a queue. Simple but may lead to long waiting times for larger jobs if smaller jobs arrive later.",
        "The job with the smallest burst time is executed next, minimizing average waiting time. Non-preemptive in nature, but may cause starvation for longer jobs if shorter ones keep arriving.",
        "Each job is given a fixed time slice (quantum) to execute. If not completed within the slice, it goes to the back of the queue. Fair and efficient for time-sharing systems but may have higher context-switching overhead.",
        "Jobs are executed based on their priority, with the highest priority going first. Lower-priority jobs may wait indefinitely if higher-priority jobs keep arriving.",
        "Similar to Priority Scheduling but allows interruption of a lower-priority job if a higher-priority job arrives, ensuring critical tasks are completed first.",
        "A preemptive variant of SJF where the job with the shortest remaining time is executed next. Ensures optimal average turnaround time but may cause starvation for long jobs."
    ];

    const allSrcs = [
        "/os_assets/1.png",
        "/os_assets/2.png",
        "/os_assets/3.png",
        "/os_assets/4.png",
        "/os_assets/5.png",
        "/os_assets/6.png"
    ];

    const hrefs = [
        "https://www.scaler.com/topics/first-come-first-serve/",
        "https://www.scaler.com/topics/sjf-scheduling-in-os/",
        "https://www.scaler.com/topics/round-robin-scheduling-in-os/",
        "https://www.scaler.com/topics/operating-system/priority-scheduling-algorithm/",
        "https://www.scaler.com/topics/preemptive-scheduling/",
        "https://www.naukri.com/code360/library/srtf-scheduling"
    ]

    const os = "CPU Scheduling";
    const icon = "/os_assets/link-icon.png";

    const firstHalf = allAlgo.slice(0, 3);
    const secondHalf = allAlgo.slice(3);

    return (
        <>
            <div className="all-algo-blogs">

                <div className="blogs-1">
                    {firstHalf.map((algo, index) => (
                        <Blog
                            key={index}
                            src={allSrcs[index]}
                            alt={algo}
                            os={os}
                            icon={icon}
                            iconAlt="Link icon"
                            heading={algo}
                            content={content[index]}
                            href={hrefs[index]}
                        />
                    ))}
                </div>


                <div className="blogs-2">
                    {secondHalf.map((algo, index) => (
                        <Blog
                            key={index + 3}
                            src={allSrcs[index + 3]}
                            alt={algo}
                            os={os}
                            icon={icon}
                            iconAlt="Link icon"
                            heading={algo}
                            content={content[index + 3]}
                            href={hrefs[index + 3]}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default BlogSection;
