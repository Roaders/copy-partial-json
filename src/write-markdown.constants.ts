import { UsageGuideConfig } from 'ts-command-line-args';

export interface ICopyPartialJsonArgs {
    sourceFile: string;
    targetFile: string;
    keys: string[];
}

export const usageGuideInfo: UsageGuideConfig<ICopyPartialJsonArgs> = {
    arguments: {
        sourceFile: String,
        targetFile: String,
        keys: { type: String, multiple: true },
    },
};
