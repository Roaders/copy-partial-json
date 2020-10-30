import { UsageGuideConfig } from 'ts-command-line-args';

export interface ICopyPartialJsonArgs {
    sourceFile: string;
    targetFile: string[];
    keys: string[];
    jsonIndent: number;
    help: boolean;
}

export const usageGuideInfo: UsageGuideConfig<ICopyPartialJsonArgs> = {
    arguments: {
        sourceFile: { type: String, alias: 's', description: 'The json file to copy from' },
        targetFile: { type: String, multiple: true, alias: 't', description: 'The json file to copy to' },
        keys: {
            type: String,
            alias: 'k',
            multiple: true,
            description: `The keys to copy. For example, 'version,name,dependencies'`,
        },
        jsonIndent: {
            type: Number,
            defaultValue: 4,
            alias: 'i',
            description: 'The number of spaces to indent your json file by. Defaults to 4.',
        },
        help: { type: Boolean, alias: 'h', description: 'Show this help text' },
    },
    parseOptions: {
        helpArg: 'help',
        baseCommand: 'copy-partial-json',
    },
};
