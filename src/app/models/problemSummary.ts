export class ProblemSummary {
    problemID: number;
    summary: string;

    constructor(problemID: number, summary: string) {
      this.problemID = problemID;
      this.summary = summary;
    }
}