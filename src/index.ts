import { parse } from 'ts-command-line-args';
import { usageGuideInfo } from './write-markdown.constants';

function copyPartialJson() {
    const args = parse(usageGuideInfo.arguments, usageGuideInfo.parseOptions);

    console.log(`copy-partial-json: ${args.sourceFile} => ${args.targetFile}`);
}

copyPartialJson();
