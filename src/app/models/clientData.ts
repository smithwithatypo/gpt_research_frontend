export class ClientData {
    metaData: {
        feedback: string;
        datetime: Date;
    }
    promptData: {
        temperature: number;
        voice: any;
        instruction: any;
        guardrail: any;
        summarize: any;
        COT: any;
        extractor: any;
    };
    studentData: {
        code: string;
        transcript: string;
        problemID: number;
        netID: string;
    };

    constructor(
        metaData: {
            feedback: string;
            datetime: Date;
        },
        promptData: {
            temperature: number;
            voice: any;
            instruction: any;
            guardrail: any;
            summarize: any;
            COT: any;
            extractor: any;
        },
        studentData: {
            code: string;
            transcript: string;
            problemID: number;
            netID: string;
        }
    ) {
        this.metaData = metaData;
        this.promptData = promptData;
        this.studentData = studentData;
    }
}
