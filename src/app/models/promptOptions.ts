export class PromptOptions {
    voice?: any;
    instruction?: any;
    guardrail?: any;
    summarize?: any;
    COT?: any;
    extractor?: any;

    constructor(voice: any, instruction: any, guardrail: any, summarize: any, COT: any, extractor: any) {
        this.voice = voice;
        this.instruction = instruction;
        this.guardrail = guardrail;
        this.summarize = summarize;
        this.COT = COT;
        this.extractor = extractor;
    }
}