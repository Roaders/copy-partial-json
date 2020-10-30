import { UsageGuideConfig } from 'ts-command-line-args';

export interface ICopyPartialJsonArgs {
    sourceFile: string;
    targetFile: string;
    keys: string[];
    help: boolean;
}

export const usageGuideInfo: UsageGuideConfig<ICopyPartialJsonArgs> = {
    arguments: {
        sourceFile: String,
        targetFile: String,
        keys: { type: String, multiple: true },
        help: { type: Boolean, alias: 'h' },
    },
    parseOptions: {
        helpArg: 'help',
        baseCommand: 'copy-partial-json',
    },
};
