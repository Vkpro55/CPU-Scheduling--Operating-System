

export default class Job {
    constructor(jobId, arrivalTime, burst, priority) {
        this.id = jobId;
        this.arrivalTime = arrivalTime >= 0 ? arrivalTime : 0;
        this.burst = burst;
        this.priority = priority;
        this.remaining = this.burst;
        this.startTime = 0;
        this.finishTime = 0;

        this.turnaroundTime = 0;
        this.waitingTime = 0;
    }

    static createRandomJob(jobId) {
        let random = (max, min = 1) => { return Math.floor(Math.random() * max) + min; };
        let arrivalTime = jobId === 1 ? 1 : random(30, 2);
        let burst = random(12);
        let priority = random(125);
        return new Job(jobId, arrivalTime, burst, priority);
    }

    get started() {
        return this.burst !== this.remaining;
    }

    get finished() {
        return this.remaining === 0;
    }

    get percent() {
        return Math.floor(((this.burst - this.remaining) * 100) / this.burst);
    }

    reset() {
        this.startTime = 0;
        this.finishTime = 0;
        this.remaining = this.burst;
        this.waitingTime = 0;
        this.turnaroundTime = 0;
        this.waitingTime = 0;
    }

    process(simulationTime) {
        if (this.finished) {
            throw new Error("Can't work on finished job");
        }

        if (!this.started) {
            this.startTime = simulationTime;
        }

        this.remaining--;

        if (this.finished) {
            this.finishTime = simulationTime + 1;
        }

        this.turnaroundTime = Math.max(0, this.getTurnaroundTime(simulationTime));
        this.waitingTime = this.getWaitingTime(simulationTime);
    }

    getUpdate(simulationTime) {
        this.turnaroundTime = Math.max(0, this.getTurnaroundTime(simulationTime));
        this.waitingTime = this.getWaitingTime(simulationTime);
    }

    getTurnaroundTime(simulationTime) {
        if (!this.started) { return 0; }
        if (this.finished) {
            return this.finishTime - this.arrivalTime;
        }
        return simulationTime + 1 - this.arrivalTime;
    }

    getWaitingTime(simulationTime) {
        return this.getTurnaroundTime(simulationTime) - (this.burst - this.remaining);
    }



    clone() {
        let job = new Job(this.id, this.arrivalTime, this.burst, this.priority);
        job.startTime = this.startTime;
        job.finishTime = this.finishTime;
        job.remaining = this.remaining;
        job.waitingTime = this.waitingTime;
        job.turnaroundTime = this.turnaroundTime;
        return job;
    }

    compareById(other) {
        return this.id - other.id;
    }

    compareByArrive(other) {
        let tmp = this.arrivalTime - other.arrivalTime;
        return tmp === 0 ? this.compareById(other) : tmp;
    }

    compareByBurst(other) {
        console.log("Now sort by burst")
        let tmp = this.burst - other.burst;
        return tmp === 0 ? this.compareByArrive(other) : tmp;
    }

    compareByPriority(other) {
        let tmp = this.priority - other.priority;
        return tmp === 0 ? this.compareByArrive(other) : tmp;
    }

    compareByRemaining(other) {
        let tmp = this.remaining - other.remaining;
        return tmp === 0 ? this.compareByArrive(other) : tmp;
    }
}


