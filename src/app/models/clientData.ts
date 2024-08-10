export class ClientData {
    metaData: {
        feedback: string;
        datetime: Date;
    }
    promptData: {
        temperature: number;
        voice: string;
        instructions: string;
        guardrails: string;
        summarizes: string;
        COTs: string;
        extractors: string;
        // difficulty: number;    // deprecated
        // model: string;    // deprecated
    };
    studentData: {
        code: string;
        transcript: string;
        problemID: number;
    };

    constructor(
        metaData: {
            feedback: string;
            datetime: Date;
        },
        promptData: {
            temperature: number;
            voice: string;
            instructions: string;
            guardrails: string;
            summarizes: string;
            COTs: string;
            extractors: string;
            // difficulty: number;    // deprecated
            // model: string;    // deprecated
        },
        studentData: {
            code: string;
            transcript: string;
            problemID: number;
        }
    ) {
        this.metaData = metaData;
        this.promptData = promptData;
        this.studentData = studentData;
    }
}
