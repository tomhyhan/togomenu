interface IJobNode {
  job: number;
  prereqs: IJobNode[];
  visited: boolean;
  visiting: boolean;
  instruction: string;
}

// export interface ITopologicalSort {

// }

class JobNode {
  job: number;
  prereqs: [];
  visited: boolean;
  visiting: boolean;
  instruction: string;

  constructor(job: number, instruction: string) {
    this.job = job;
    this.prereqs = [];
    this.visited = false;
    this.visiting = false;
    this.instruction = instruction;
  }
}

class Jobs {
  jobList: IJobNode[];
  jobDict: {
    [index: number]: IJobNode;
  };

  constructor(private jobs: [number, string][]) {
    this.jobList = [];
    this.jobDict = {};
    for (const [jobNum, instruction] of jobs) {
      const jobNode = new JobNode(jobNum, instruction);
      this.jobList.push(jobNode);
      this.jobDict[jobNum] = jobNode;
    }
  }

  addPrereqs(job: number, prereq: number) {
    const currentJob = this.jobDict[job];
    const currentDep = this.jobDict[prereq];
    currentJob.prereqs.push(currentDep);
  }
}

export class TopologicalSort {
  public getInstrunctions(
    jobs: [number, string][],
    jobsDeps: [string, string][]
  ) {
    const jobList = new Jobs(jobs);
    this.addPrereqs(jobList, jobsDeps);
    console.log(jobList.jobDict);
    const orders = this.getOrders(jobList);
    console.log(orders);
    return orders;
  }

  private getOrders(jobList: Jobs) {
    const orders: string[] = [];
    const nodes = jobList.jobList;
    while (nodes.length > 0) {
      const currentNode = nodes.pop();
      const isCycle = this.bfs(currentNode!, orders);
      if (isCycle) {
        return [];
      }
    }
    return orders;
  }

  private bfs(node: IJobNode, orders: string[]) {
    if (node.visited) {
      return false;
    }
    if (node.visiting) {
      return true;
    }
    node.visiting = true;
    for (const prereq of node.prereqs) {
      const isCycle = this.bfs(prereq, orders);
      if (isCycle) return true;
    }
    node.visiting = false;
    node.visited = true;
    orders.push(`${node.job} : ${node.instruction}`);
  }
  // 1 -> 2
  private addPrereqs(jobList: Jobs, jobsDeps: [string, string][]) {
    for (const [prereq, job] of jobsDeps) {
      const intPrereq = parseInt(prereq.split(":")[0]);
      const intJob = parseInt(job.split(":")[0]);
      jobList.addPrereqs(intJob, intPrereq);
    }
  }
}
