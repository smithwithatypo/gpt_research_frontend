export class ClientData {
    metaData: {
        feedback: string;
        datetime: Date;
    }
    promptData: {
        temperature: number;
        voice: string;
        difficulty: number;
        model: string;
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
            difficulty: number;
            model: string;
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
