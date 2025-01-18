
export class FirstComeFirstServe {

    processQueue(readyQueue, currentJob) {
        readyQueue = readyQueue.sort((a, b) => a.compareByArrive(b));
        if (currentJob) {
            readyQueue.unshift(currentJob);
        }
    }
}

export class ShortestJobFirst {

    processQueue(readyQueue, currentJob) {
        readyQueue = readyQueue.sort((a, b) => a.compareByBurst(b));
        if (currentJob) {
            readyQueue.unshift(currentJob);
        }
    }

}

export class Priority {

    processQueue(readyQueue, currentJob) {
        readyQueue = readyQueue.sort((a, b) => a.compareByPriority(b));
        if (currentJob) {
            readyQueue.unshift(currentJob);
        }
    }
}


export class PreemptivePriority {
    constructor() {
        this.isPreemptive = true;
    }

    processQueue(readyQueue, currentJob) {
        if (currentJob) {
            readyQueue.push(currentJob);
        }
        return readyQueue.sort((a, b) => a.compareByPriority(b));
    }
}

export class STRF {
    constructor() {
        this.isPreemptive = true;
    }

    processQueue(readyQueue, currentJob) {
        if (currentJob) {
            readyQueue.push(currentJob);
        }
        return readyQueue.sort((a, b) => a.compareByRemaining(b));
    }
}

export class RoundRobin {
    constructor(quantumTime = 2) {
        this.quantumTime = quantumTime;
        this.processTime = 0;
    }



    processQueue(readyQueue, currentJob) {
        console.log("qunatum from Rounf Robin:", this.quantumTime);
        if (!currentJob) {
            this.processTime = 0;
            return;
        }

        this.processTime++;

        if (this.processTime === this.quantumTime) {

            if (!currentJob.finished) {
                readyQueue.push(currentJob);
            }
            this.processTime = 0;
        }
        else {
            readyQueue.unshift(currentJob);
        }
    }

}
